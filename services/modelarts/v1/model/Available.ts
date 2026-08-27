import { Value } from './Value';


export class Available {
    public value?: Value;
    public maxValue?: object;
    public timestamp?: string;
    public window?: string;
    public constructor() { 
    }
    public withValue(value: Value): Available {
        this['value'] = value;
        return this;
    }
    public withMaxValue(maxValue: object): Available {
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