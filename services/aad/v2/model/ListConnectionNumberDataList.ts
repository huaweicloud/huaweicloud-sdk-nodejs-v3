

export class ListConnectionNumberDataList {
    public time?: number;
    public value?: number;
    public constructor() { 
    }
    public withTime(time: number): ListConnectionNumberDataList {
        this['time'] = time;
        return this;
    }
    public withValue(value: number): ListConnectionNumberDataList {
        this['value'] = value;
        return this;
    }
}