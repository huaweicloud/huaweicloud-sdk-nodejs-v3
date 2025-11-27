

export class ResourceKinds {
    public apiGroups?: Array<string>;
    public kinds?: Array<string>;
    public constructor() { 
    }
    public withApiGroups(apiGroups: Array<string>): ResourceKinds {
        this['apiGroups'] = apiGroups;
        return this;
    }
    public withKinds(kinds: Array<string>): ResourceKinds {
        this['kinds'] = kinds;
        return this;
    }
}