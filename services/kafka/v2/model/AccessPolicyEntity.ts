

export class AccessPolicyEntity {
    private 'user_name'?: string;
    private 'access_policy'?: AccessPolicyEntityAccessPolicyEnum | string;
    public constructor() { 
    }
    public withUserName(userName: string): AccessPolicyEntity {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withAccessPolicy(accessPolicy: AccessPolicyEntityAccessPolicyEnum | string): AccessPolicyEntity {
        this['access_policy'] = accessPolicy;
        return this;
    }
    public set accessPolicy(accessPolicy: AccessPolicyEntityAccessPolicyEnum | string  | undefined) {
        this['access_policy'] = accessPolicy;
    }
    public get accessPolicy(): AccessPolicyEntityAccessPolicyEnum | string | undefined {
        return this['access_policy'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AccessPolicyEntityAccessPolicyEnum {
    ALL = 'all',
    PUB = 'pub',
    SUB = 'sub'
}
