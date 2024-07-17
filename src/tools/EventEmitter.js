import { debounce, throttle } from "./functional";
import { runAsyncGrnerator } from "./runGenerator";

export const _listenerType = {
  TAKE_EVERY: "TAKE_EVERY",
  TAKE_LATEST: "TAKE_LATEST",
  THROTTLE: "THROTTLE",
};

export class EventEmitter {
  constructor() {
    this.event = {};
    this.eventKeys = new Set();
  }

  cancel(eventName) {
    delete this.event[eventName];
    this.eventKeys.delete(eventName);
  }

  has(eventName) {
    return this.eventKeys.has(eventName);
  }

  onEvery(eventName, listener) {
    if (!this.event[eventName]) {
      this.event[eventName] = [];
    }
    this.event[eventName].push({
      type: _listenerType.TAKE_EVERY,
      listener,
    });
    this.eventKeys.add(eventName);
  }

  emitEvery(eventName, ...args) {
    const listeners = this.event[eventName] || [];
    listeners
      .filter(({ type }) => type === _listenerType.TAKE_EVERY)
      .forEach(({ listener }) => {
        runAsyncGrnerator(listener, ...args);
      });
  }

  onLatest(eventName, listener) {
    if (!this.event[eventName]) {
      this.event[eventName] = [];
    }
    this.event[eventName].push({
      type: _listenerType.TAKE_LATEST,
      listener,
    });
    this.eventKeys.add(eventName);
  }

  emitLatest = debounce((eventName, ...args) => {
    const listeners = this.event[eventName] || [];
    listeners
      .filter(({ type }) => type === _listenerType.TAKE_LATEST)
      .forEach(({ listener }) => {
        runAsyncGrnerator(listener, ...args);
      });
  }, 500);

  onThrottle(eventName, listener) {
    if (!this.event[eventName]) {
      this.event[eventName] = [];
    }
    this.event[eventName].push({
      type: _listenerType.THROTTLE,
      listener,
    });
    this.eventKeys.add(eventName);
  }

  emitThrottle = throttle((eventName, ...args) => {
    const listeners = this.event[eventName] || [];
    listeners
      .filter(({ type }) => type === _listenerType.THROTTLE)
      .forEach(({ listener }) => {
        runAsyncGrnerator(listener, ...args);
      });
  }, 2000);
}
