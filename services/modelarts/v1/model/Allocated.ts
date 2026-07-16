import { Value } from './Value';


export class Allocated {
    public value?: Value;
    public timestamp?: string;
    public window?: string;
    public constructor() { 
    }
    public withValue(value: Value): Allocated {
        this['value'] = value;
        return this;
    }
    public withTimestamp(timestamp: string): Allocated {
        this['timestamp'] = timestamp;
        return this;
    }
    public withWindow(window: string): Allocated {
        this['window'] = window;
        return this;
    }
}