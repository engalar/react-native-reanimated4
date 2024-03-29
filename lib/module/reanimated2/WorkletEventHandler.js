'use strict';

function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { registerEventHandler, unregisterEventHandler } from './core';
import { shouldBeUseWeb } from './PlatformChecker';
const SHOULD_BE_USE_WEB = shouldBeUseWeb();
// In JS implementation (e.g. for web) we don't use Reanimated's
// event emitter, therefore we have to handle here
// the event that came from React Native and convert it.
function jsListener(eventName, handler) {
  return evt => {
    handler({
      ...evt.nativeEvent,
      eventName
    });
  };
}
export default class WorkletEventHandler {
  constructor(worklet) {
    let eventNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    _defineProperty(this, "worklet", void 0);
    _defineProperty(this, "eventNames", void 0);
    _defineProperty(this, "reattachNeeded", void 0);
    _defineProperty(this, "listeners", void 0);
    _defineProperty(this, "viewTag", void 0);
    _defineProperty(this, "registrations", void 0);
    this.worklet = worklet;
    this.eventNames = eventNames;
    this.reattachNeeded = false;
    this.listeners = {};
    this.viewTag = undefined;
    this.registrations = [];
    if (SHOULD_BE_USE_WEB) {
      this.listeners = eventNames.reduce((acc, eventName) => {
        acc[eventName] = jsListener(eventName, worklet);
        return acc;
      }, {});
    }
  }
  updateWorklet(newWorklet) {
    this.worklet = newWorklet;
    this.reattachNeeded = true;
  }
  registerForEvents(viewTag, fallbackEventName) {
    this.viewTag = viewTag;
    this.registrations = this.eventNames.map(eventName => registerEventHandler(this.worklet, eventName, viewTag));
    if (this.registrations.length === 0 && fallbackEventName) {
      this.registrations.push(registerEventHandler(this.worklet, fallbackEventName, viewTag));
    }
  }
  registerForEventByName(eventName) {
    this.registrations.push(registerEventHandler(this.worklet, eventName));
  }
  unregisterFromEvents() {
    this.registrations.forEach(id => unregisterEventHandler(id));
    this.registrations = [];
  }
}
//# sourceMappingURL=WorkletEventHandler.js.map