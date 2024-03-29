

export class UserTopicPerms {
    public name?: string;
    public perm?: UserTopicPermsPermEnum | string;
    public constructor() { 
    }
    public withName(name: string): UserTopicPerms {
        this['name'] = name;
        return this;
    }
    public withPerm(perm: UserTopicPermsPermEnum | string): UserTopicPerms {
        this['perm'] = perm;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UserTopicPermsPermEnum {
    PUB = 'PUB',
    SUB = 'SUB',
    PUB_SUB = 'PUB|SUB',
    DENY = 'DENY'
}
