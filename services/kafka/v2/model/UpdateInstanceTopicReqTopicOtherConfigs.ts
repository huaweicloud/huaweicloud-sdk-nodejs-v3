

export class UpdateInstanceTopicReqTopicOtherConfigs {
    public name?: string;
    public value?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateInstanceTopicReqTopicOtherConfigs {
        this['name'] = name;
        return this;
    }
    public withValue(value: string): UpdateInstanceTopicReqTopicOtherConfigs {
        this['value'] = value;
        return this;
    }
}