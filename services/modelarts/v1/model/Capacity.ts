import { Value } from './Value';


export class Capacity {
    public value?: Value;
    public maxValue?: Value;
    public allValue?: Value;
    public allMaxValue?: Value;
    public timestamp?: string;
    public window?: string;
    public constructor() { 
    }
    public withValue(value: Value): Capacity {
        this['value'] = value;
        return this;
    }
    public withMaxValue(maxValue: Value): Capacity {
        this['maxValue'] = maxValue;
        return this;
    }
    public withAllValue(allValue: Value): Capacity {
        this['allValue'] = allValue;
        return this;
    }
    public withAllMaxValue(allMaxValue: Value): Capacity {
        this['allMaxValue'] = allMaxValue;
        return this;
    }
    public withTimestamp(timestamp: string): Capacity {
        this['timestamp'] = timestamp;
        return this;
    }
    public withWindow(window: string): Capacity {
        this['window'] = window;
        return this;
    }
}