

export class V2UserData {
    public value?: number;
    public time?: string;
    public constructor() { 
    }
    public withValue(value: number): V2UserData {
        this['value'] = value;
        return this;
    }
    public withTime(time: string): V2UserData {
        this['time'] = time;
        return this;
    }
}