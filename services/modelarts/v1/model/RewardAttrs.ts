

export class RewardAttrs {
    public name?: string;
    public mode?: string;
    public regex?: string;
    public constructor() { 
    }
    public withName(name: string): RewardAttrs {
        this['name'] = name;
        return this;
    }
    public withMode(mode: string): RewardAttrs {
        this['mode'] = mode;
        return this;
    }
    public withRegex(regex: string): RewardAttrs {
        this['regex'] = regex;
        return this;
    }
}