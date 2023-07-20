

export class CreateInstanceTopicReqTopicOtherConfigs {
    public name?: string;
    public value?: string;
    public constructor() { 
    }
    public withName(name: string): CreateInstanceTopicReqTopicOtherConfigs {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): CreateInstanceTopicReqTopicOtherConfigs {
        this['value'] = value;
        return this;
    }
}