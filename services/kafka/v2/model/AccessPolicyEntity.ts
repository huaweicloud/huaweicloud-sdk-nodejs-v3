

export class AccessPolicyEntity {
    private 'user_name'?: string | undefined;
    private 'access_policy'?: AccessPolicyEntityAccessPolicyEnum | undefined;
    public constructor() { 
    }
    public withUserName(userName: string): AccessPolicyEntity {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string | undefined) {
        this['user_name'] = userName;
    }
    public get userName() {
        return this['user_name'];
    }
    public withAccessPolicy(accessPolicy: AccessPolicyEntityAccessPolicyEnum): AccessPolicyEntity {
        this['access_policy'] = accessPolicy;
        return this;
    }
    public set accessPolicy(accessPolicy: AccessPolicyEntityAccessPolicyEnum | undefined) {
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
export enum AccessPolicyEntityAccessPolicyEnum {
    ALL = 'all',
    PUB = 'pub',
    SUB = 'sub'
}
