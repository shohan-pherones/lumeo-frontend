/* eslint-disable @typescript-eslint/no-explicit-any */
type Callback = (data?: any) => void;

class EventBus {
  private events: { [key: string]: Callback[] } = {};

  subscribe(event: string, callback: Callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  unsubscribe(event: string, callback: Callback) {
    this.events[event] =
      this.events[event]?.filter((cb) => cb !== callback) || [];
  }

  publish(event: string, data?: any) {
    this.events[event]?.forEach((callback) => callback(data));
  }
}

export const eventBus = new EventBus();
