

export class PolicyEntity {
    public owner?: boolean;
    private 'user_name'?: string | undefined;
    private 'access_policy'?: PolicyEntityAccessPolicyEnum | undefined;
    public constructor() { 
    }
    public withOwner(owner: boolean): PolicyEntity {
        this['owner'] = owner;
        return this;
    }
    public withUserName(userName: string): PolicyEntity {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string | undefined) {
        this['user_name'] = userName;
    }
    public get userName() {
        return this['user_name'];
    }
    public withAccessPolicy(accessPolicy: PolicyEntityAccessPolicyEnum): PolicyEntity {
        this['access_policy'] = accessPolicy;
        return this;
    }
    public set accessPolicy(accessPolicy: PolicyEntityAccessPolicyEnum | undefined) {
        this['access_policy'] = accessPolicy;
    }
    public get accessPolicy() {
        return this['access_policy'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PolicyEntityAccessPolicyEnum {
    ALL = 'all',
    PUB = 'pub',
    SUB = 'sub'
}
