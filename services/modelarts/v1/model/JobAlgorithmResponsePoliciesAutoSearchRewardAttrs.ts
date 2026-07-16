

export class JobAlgorithmResponsePoliciesAutoSearchRewardAttrs {
    public name?: string;
    public mode?: string;
    public regex?: string;
    public constructor() { 
    }
    public withName(name: string): JobAlgorithmResponsePoliciesAutoSearchRewardAttrs {
        this['name'] = name;
        return this;
    }
    public withMode(mode: string): JobAlgorithmResponsePoliciesAutoSearchRewardAttrs {
        this['mode'] = mode;
        return this;
    }
    public withRegex(regex: string): JobAlgorithmResponsePoliciesAutoSearchRewardAttrs {
        this['regex'] = regex;
        return this;
    }
}