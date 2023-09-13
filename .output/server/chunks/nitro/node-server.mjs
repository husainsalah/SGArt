globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { klona } from 'klona';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';
import gracefulShutdown from 'http-graceful-shutdown';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {}
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function trapUnhandledNodeErrors() {
  {
    process.on(
      "unhandledRejection",
      (err) => console.error("[nitro] [unhandledRejection] " + err)
    );
    process.on(
      "uncaughtException",
      (err) => console.error("[nitro]  [uncaughtException] " + err)
    );
  }
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(html);
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI\"",
    "mtime": "2023-09-13T15:41:00.152Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/_nuxt/Carousel.2eb4c997.js": {
    "type": "application/javascript",
    "etag": "\"51b2-B1YwYeiOoQep6R18TTcT+JPkSWs\"",
    "mtime": "2023-09-13T15:41:00.148Z",
    "size": 20914,
    "path": "../public/_nuxt/Carousel.2eb4c997.js"
  },
  "/_nuxt/Divider.4e8158e5.js": {
    "type": "application/javascript",
    "etag": "\"a06-LSk3mGQgcrSt438e90ayZhB4X80\"",
    "mtime": "2023-09-13T15:41:00.141Z",
    "size": 2566,
    "path": "../public/_nuxt/Divider.4e8158e5.js"
  },
  "/_nuxt/GradientText.79be8d75.js": {
    "type": "application/javascript",
    "etag": "\"885-vZi6RwNC2MafpaTQ7YmU6vRJsx4\"",
    "mtime": "2023-09-13T15:41:00.140Z",
    "size": 2181,
    "path": "../public/_nuxt/GradientText.79be8d75.js"
  },
  "/_nuxt/Grid.68311ed9.js": {
    "type": "application/javascript",
    "etag": "\"274c-V+02BqavJRgf7qK1ftncdnYLYck\"",
    "mtime": "2023-09-13T15:41:00.138Z",
    "size": 10060,
    "path": "../public/_nuxt/Grid.68311ed9.js"
  },
  "/_nuxt/InShot_20230815_154703481.9198f563.mp4": {
    "type": "video/mp4",
    "etag": "\"184f37b-ZFHKHUfQ0qkmgB7Pw3YEuQHCssg\"",
    "mtime": "2023-09-13T15:41:00.108Z",
    "size": 25490299,
    "path": "../public/_nuxt/InShot_20230815_154703481.9198f563.mp4"
  },
  "/_nuxt/InShot_20230815_154703481_1.c24ba2f5.mp4": {
    "type": "video/mp4",
    "etag": "\"218129d-v3gY8yqqZYWTjWV/eHSdkVircT4\"",
    "mtime": "2023-09-13T15:40:59.558Z",
    "size": 35132061,
    "path": "../public/_nuxt/InShot_20230815_154703481_1.c24ba2f5.mp4"
  },
  "/_nuxt/TheFooter.3d67224c.js": {
    "type": "application/javascript",
    "etag": "\"1ca-BrVxXLkk76xAMxd1FhBap2N7tW0\"",
    "mtime": "2023-09-13T15:40:58.937Z",
    "size": 458,
    "path": "../public/_nuxt/TheFooter.3d67224c.js"
  },
  "/_nuxt/TheHeader.1a9c0895.js": {
    "type": "application/javascript",
    "etag": "\"efab-h0X5doEzIDJMYZbmLJNM5N6kyRU\"",
    "mtime": "2023-09-13T15:40:58.934Z",
    "size": 61355,
    "path": "../public/_nuxt/TheHeader.1a9c0895.js"
  },
  "/_nuxt/TheHeader.b61645e6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"399-USqQYNkA8KnhVO2I68y2Jk/oEvM\"",
    "mtime": "2023-09-13T15:40:58.931Z",
    "size": 921,
    "path": "../public/_nuxt/TheHeader.b61645e6.css"
  },
  "/_nuxt/about.02c01840.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"135-ZLyt0mHQtLjQe7yqnk7PcTS7oZM\"",
    "mtime": "2023-09-13T15:40:58.929Z",
    "size": 309,
    "path": "../public/_nuxt/about.02c01840.css"
  },
  "/_nuxt/about.7360c07a.js": {
    "type": "application/javascript",
    "etag": "\"39e9-zyva/lgcZYbLMX4q/FwlSzkee7s\"",
    "mtime": "2023-09-13T15:40:58.927Z",
    "size": 14825,
    "path": "../public/_nuxt/about.7360c07a.js"
  },
  "/_nuxt/art.8ae1057b.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"13f-EO29gDu0bI3Op9dphycy1S5EqLM\"",
    "mtime": "2023-09-13T15:40:58.925Z",
    "size": 319,
    "path": "../public/_nuxt/art.8ae1057b.css"
  },
  "/_nuxt/art.91770e54.js": {
    "type": "application/javascript",
    "etag": "\"776-8wswuoSFB299m+9UJGz9yL0coCY\"",
    "mtime": "2023-09-13T15:40:58.923Z",
    "size": 1910,
    "path": "../public/_nuxt/art.91770e54.js"
  },
  "/_nuxt/bandcamp-button.4cfb6350.png": {
    "type": "image/png",
    "etag": "\"3212-i0g53WgQFljcuj+qK2NfacbJ1ro\"",
    "mtime": "2023-09-13T15:40:58.918Z",
    "size": 12818,
    "path": "../public/_nuxt/bandcamp-button.4cfb6350.png"
  },
  "/_nuxt/call.dcd5ae29.jpg": {
    "type": "image/jpeg",
    "etag": "\"6dd70c-aQHtVItTV+m0SiHYF/3AI+P480c\"",
    "mtime": "2023-09-13T15:40:58.890Z",
    "size": 7198476,
    "path": "../public/_nuxt/call.dcd5ae29.jpg"
  },
  "/_nuxt/contact.5a64d3c8.js": {
    "type": "application/javascript",
    "etag": "\"83a-j6aweeNAxT4HjAMZxbEq7I/C//Q\"",
    "mtime": "2023-09-13T15:40:58.751Z",
    "size": 2106,
    "path": "../public/_nuxt/contact.5a64d3c8.js"
  },
  "/_nuxt/different-earths.02321e9e.jpg": {
    "type": "image/jpeg",
    "etag": "\"951a1-kEpOb3NUEUqNGL+53pw+mSx0wXY\"",
    "mtime": "2023-09-13T15:40:58.747Z",
    "size": 610721,
    "path": "../public/_nuxt/different-earths.02321e9e.jpg"
  },
  "/_nuxt/enter.19b4670d.jpg": {
    "type": "image/jpeg",
    "etag": "\"5183cb-ICuWBzPLfbKSSBLNfmqWdoPp3bk\"",
    "mtime": "2023-09-13T15:40:58.713Z",
    "size": 5342155,
    "path": "../public/_nuxt/enter.19b4670d.jpg"
  },
  "/_nuxt/entry.27bb4dcf.js": {
    "type": "application/javascript",
    "etag": "\"24109-kECiDHlDM0R0c+Jyu6ttPbwupkM\"",
    "mtime": "2023-09-13T15:40:58.620Z",
    "size": 147721,
    "path": "../public/_nuxt/entry.27bb4dcf.js"
  },
  "/_nuxt/entry.828af347.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3661-9qMhcm9Hc0SsWdZTLVf1kTiG5TA\"",
    "mtime": "2023-09-13T15:40:58.616Z",
    "size": 13921,
    "path": "../public/_nuxt/entry.828af347.css"
  },
  "/_nuxt/error-404.95c28eb4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e70-L8dF9pJCW0qi7de8Az4GyBoTHvI\"",
    "mtime": "2023-09-13T15:40:58.613Z",
    "size": 3696,
    "path": "../public/_nuxt/error-404.95c28eb4.css"
  },
  "/_nuxt/error-404.fc0dbb81.js": {
    "type": "application/javascript",
    "etag": "\"8cd-MYjW4s1Aqg2CXwK+/DySHgF8iU4\"",
    "mtime": "2023-09-13T15:40:58.610Z",
    "size": 2253,
    "path": "../public/_nuxt/error-404.fc0dbb81.js"
  },
  "/_nuxt/error-500.e798523c.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"7e0-QP983DB9m1oiDr87r1V1AYEhrfo\"",
    "mtime": "2023-09-13T15:40:58.608Z",
    "size": 2016,
    "path": "../public/_nuxt/error-500.e798523c.css"
  },
  "/_nuxt/error-500.fa8021b0.js": {
    "type": "application/javascript",
    "etag": "\"756-H9JX8k/MAIBSiGTDGKlbyXDM/5I\"",
    "mtime": "2023-09-13T15:40:58.607Z",
    "size": 1878,
    "path": "../public/_nuxt/error-500.fa8021b0.js"
  },
  "/_nuxt/exhibitions.b8796c4d.js": {
    "type": "application/javascript",
    "etag": "\"a5d-Fvfem4KjnKgDggbxO1wSlzrSCMU\"",
    "mtime": "2023-09-13T15:40:58.600Z",
    "size": 2653,
    "path": "../public/_nuxt/exhibitions.b8796c4d.js"
  },
  "/_nuxt/flower-pot.f7b30ded.jpg": {
    "type": "image/jpeg",
    "etag": "\"22a9c3-RpRSH7Iwv97VrnJmGjwYRJVfMQ4\"",
    "mtime": "2023-09-13T15:40:58.595Z",
    "size": 2271683,
    "path": "../public/_nuxt/flower-pot.f7b30ded.jpg"
  },
  "/_nuxt/free-jazz-gallery-tour-v1.750ca3ba.js": {
    "type": "application/javascript",
    "etag": "\"7e-RRWF1qpToaF6H2futEP2qCecOcg\"",
    "mtime": "2023-09-13T15:40:58.554Z",
    "size": 126,
    "path": "../public/_nuxt/free-jazz-gallery-tour-v1.750ca3ba.js"
  },
  "/_nuxt/free-jazz-gallery-tour-v1.c46feb2e.mp4": {
    "type": "video/mp4",
    "etag": "\"48e8cb2-XoC6u7d1+NxB4aA5dJGCSBi+cFw\"",
    "mtime": "2023-09-13T15:40:58.521Z",
    "size": 76450994,
    "path": "../public/_nuxt/free-jazz-gallery-tour-v1.c46feb2e.mp4"
  },
  "/_nuxt/girl-groups.36f325ab.jpg": {
    "type": "image/jpeg",
    "etag": "\"18ebba-XdrJKJvDY9l208L0VDSoKeuDRhs\"",
    "mtime": "2023-09-13T15:40:56.951Z",
    "size": 1633210,
    "path": "../public/_nuxt/girl-groups.36f325ab.jpg"
  },
  "/_nuxt/index.0ec7d242.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"32-OjokNZKDbcpYfjnnqiK1XJ4tweY\"",
    "mtime": "2023-09-13T15:40:56.916Z",
    "size": 50,
    "path": "../public/_nuxt/index.0ec7d242.css"
  },
  "/_nuxt/index.35d5c5ee.js": {
    "type": "application/javascript",
    "etag": "\"4c9-1zBeHnxfpF2UcxqzaFRAs6Zfd9c\"",
    "mtime": "2023-09-13T15:40:56.915Z",
    "size": 1225,
    "path": "../public/_nuxt/index.35d5c5ee.js"
  },
  "/_nuxt/light.0ffc2977.js": {
    "type": "application/javascript",
    "etag": "\"1b15d-ISYKgvDuWaJsREDNjMm4GZVz6NA\"",
    "mtime": "2023-09-13T15:40:56.914Z",
    "size": 110941,
    "path": "../public/_nuxt/light.0ffc2977.js"
  },
  "/_nuxt/light.bd93c49f.js": {
    "type": "application/javascript",
    "etag": "\"7bb2-yQiWzEf8J2erynNPDnbNOcVvoWw\"",
    "mtime": "2023-09-13T15:40:56.911Z",
    "size": 31666,
    "path": "../public/_nuxt/light.bd93c49f.js"
  },
  "/_nuxt/nuxt-link.78153441.js": {
    "type": "application/javascript",
    "etag": "\"10f6-vpOkqpofgHvRLBr0OXDPNnsYtPM\"",
    "mtime": "2023-09-13T15:40:56.909Z",
    "size": 4342,
    "path": "../public/_nuxt/nuxt-link.78153441.js"
  },
  "/_nuxt/parts-of.026b5186.jpg": {
    "type": "image/jpeg",
    "etag": "\"2ce865-d6ZUOcN08E5w3sxwVt5R05nW2Yg\"",
    "mtime": "2023-09-13T15:40:56.899Z",
    "size": 2943077,
    "path": "../public/_nuxt/parts-of.026b5186.jpg"
  },
  "/_nuxt/press.2ea1e8f8.js": {
    "type": "application/javascript",
    "etag": "\"172-g0DEC2ANOL+SZSl/dXbWau0a9N8\"",
    "mtime": "2023-09-13T15:40:56.842Z",
    "size": 370,
    "path": "../public/_nuxt/press.2ea1e8f8.js"
  },
  "/_nuxt/sg-video-poster.084f70ae.png": {
    "type": "image/png",
    "etag": "\"d7509-sc/RvSMR5XPzEbwklJxTpwuNRJE\"",
    "mtime": "2023-09-13T15:40:56.838Z",
    "size": 881929,
    "path": "../public/_nuxt/sg-video-poster.084f70ae.png"
  },
  "/_nuxt/splash.03d9a227.js": {
    "type": "application/javascript",
    "etag": "\"508-wtS4iYcNlx3gMY8HCyt20DR0TG8\"",
    "mtime": "2023-09-13T15:40:56.818Z",
    "size": 1288,
    "path": "../public/_nuxt/splash.03d9a227.js"
  },
  "/_nuxt/splash.7d885216.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"32-6hzzzkjB1AtIMiKgddH3WMlC2XA\"",
    "mtime": "2023-09-13T15:40:56.817Z",
    "size": 50,
    "path": "../public/_nuxt/splash.7d885216.css"
  },
  "/_nuxt/splash2.773551d0.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"32-6vwhhcDbOQUu2+23gRsTtNZph5g\"",
    "mtime": "2023-09-13T15:40:56.817Z",
    "size": 50,
    "path": "../public/_nuxt/splash2.773551d0.css"
  },
  "/_nuxt/splash2.a6019306.js": {
    "type": "application/javascript",
    "etag": "\"48d-ynuLfiZmCJbZxcDcvyAfPf284cY\"",
    "mtime": "2023-09-13T15:40:56.816Z",
    "size": 1165,
    "path": "../public/_nuxt/splash2.a6019306.js"
  },
  "/_nuxt/theme.33b3278d.js": {
    "type": "application/javascript",
    "etag": "\"2493e-rQq1TOvX3FsN0tAs2TNhLNMUCcs\"",
    "mtime": "2023-09-13T15:40:56.813Z",
    "size": 149822,
    "path": "../public/_nuxt/theme.33b3278d.js"
  },
  "/_nuxt/untitled-no-1.1eca5612.jpg": {
    "type": "image/jpeg",
    "etag": "\"ab75d-RMXAb7bawzW/DPbRHfKHPN4+xgI\"",
    "mtime": "2023-09-13T15:40:56.809Z",
    "size": 702301,
    "path": "../public/_nuxt/untitled-no-1.1eca5612.jpg"
  },
  "/_nuxt/untitled-no-2.de1535ea.jpg": {
    "type": "image/jpeg",
    "etag": "\"124538-uSQvN50/CS25o6aMGf9MGUjx/pA\"",
    "mtime": "2023-09-13T15:40:56.788Z",
    "size": 1197368,
    "path": "../public/_nuxt/untitled-no-2.de1535ea.jpg"
  },
  "/_nuxt/untitled-no-3.583de9d3.jpg": {
    "type": "image/jpeg",
    "etag": "\"94fba-aQB0xmDP8z40a2u+tpllzSZbkTw\"",
    "mtime": "2023-09-13T15:40:56.762Z",
    "size": 610234,
    "path": "../public/_nuxt/untitled-no-3.583de9d3.jpg"
  },
  "/_nuxt/untitled-no-4.c1a37741.jpg": {
    "type": "image/jpeg",
    "etag": "\"115003-UQO+nRaiflUnQGYjz8+ldOS7xZk\"",
    "mtime": "2023-09-13T15:40:56.741Z",
    "size": 1134595,
    "path": "../public/_nuxt/untitled-no-4.c1a37741.jpg"
  },
  "/_nuxt/untitled-no-5.0e4aefb1.jpg": {
    "type": "image/jpeg",
    "etag": "\"4edff-/o2gGY2Y5EesEX7Sc1BXpVUNu4M\"",
    "mtime": "2023-09-13T15:40:56.714Z",
    "size": 323071,
    "path": "../public/_nuxt/untitled-no-5.0e4aefb1.jpg"
  },
  "/_nuxt/untitled-no-6.d76310a4.jpg": {
    "type": "image/jpeg",
    "etag": "\"5b075-8siJ9zB70ifWrmW44GjcmcQuVAA\"",
    "mtime": "2023-09-13T15:40:56.702Z",
    "size": 372853,
    "path": "../public/_nuxt/untitled-no-6.d76310a4.jpg"
  },
  "/_nuxt/untitled-no-7.2edc6861.jpg": {
    "type": "image/jpeg",
    "etag": "\"139ae2-NgR0IIT6eQIU1X7dVHYvQWjbwjY\"",
    "mtime": "2023-09-13T15:40:56.688Z",
    "size": 1284834,
    "path": "../public/_nuxt/untitled-no-7.2edc6861.jpg"
  },
  "/_nuxt/zulu-robot.0aefee0f.jpg": {
    "type": "image/jpeg",
    "etag": "\"3e8151-xya1tsphcTswJrjUg9mjPC242pY\"",
    "mtime": "2023-09-13T15:40:56.640Z",
    "size": 4096337,
    "path": "../public/_nuxt/zulu-robot.0aefee0f.jpg"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_Or57lj = () => import('../handlers/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_Or57lj, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_Or57lj, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT, 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  gracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((err) => {
          console.error(err);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const listener = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
