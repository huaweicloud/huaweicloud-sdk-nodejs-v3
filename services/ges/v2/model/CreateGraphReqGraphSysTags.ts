

export class CreateGraphReqGraphSysTags {
    public key?: string;
    public value?: string;
    public constructor() { 
    }
    public withKey(key: string): CreateGraphReqGraphSysTags {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): CreateGraphReqGraphSysTags {
        this['value'] = value;
        return this;
    }
}