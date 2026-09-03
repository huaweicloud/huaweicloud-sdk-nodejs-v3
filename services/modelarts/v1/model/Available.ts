import { Value } from './Value';


export class Available {
    public value?: Value;
    public maxValue?: Value;
    public timestamp?: string;
    public window?: string;
    public constructor() { 
    }
    public withValue(value: Value): Available {
        this['value'] = value;
        return this;
    }
    public withMaxValue(maxValue: Value): Available {
        this['maxValue'] = maxValue;
        return this;
    }
    public withTimestamp(timestamp: string): Available {
        this['timestamp'] = timestamp;
        return this;
    }
    public withWindow(window: string): Available {
        this['window'] = window;
        return this;
    }
}