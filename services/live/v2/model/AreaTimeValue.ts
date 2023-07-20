import { TimeValue } from './TimeValue';


export class AreaTimeValue {
    public name?: string;
    public data?: Array<TimeValue>;
    public constructor(name?: string, data?: Array<TimeValue>) { 
        this['name'] = name;
        this['data'] = data;
    }
    public withName(name: string): AreaTimeValue {
        this['name'] = name;
        return this;
    }
    public withData(data: Array<TimeValue>): AreaTimeValue {
        this['data'] = data;
        return this;
    }
}