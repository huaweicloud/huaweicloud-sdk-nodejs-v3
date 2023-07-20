

export class PolicyEntity {
    public owner?: boolean;
    private 'user_name'?: string;
    private 'access_policy'?: PolicyEntityAccessPolicyEnum | string;
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
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withAccessPolicy(accessPolicy: PolicyEntityAccessPolicyEnum | string): PolicyEntity {
        this['access_policy'] = accessPolicy;
        return this;
    }
    public set accessPolicy(accessPolicy: PolicyEntityAccessPolicyEnum | string  | undefined) {
        this['access_policy'] = accessPolicy;
    }
    public get accessPolicy(): PolicyEntityAccessPolicyEnum | string | undefined {
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
