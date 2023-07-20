

export class UserGroupPerms {
    public name?: string;
    public perm?: UserGroupPermsPermEnum | string;
    public constructor() { 
    }
    public withName(name: string): UserGroupPerms {
        this['name'] = name;
        return this;
    }
    public withPerm(perm: UserGroupPermsPermEnum | string): UserGroupPerms {
        this['perm'] = perm;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UserGroupPermsPermEnum {
    SUB = 'SUB',
    DENY = 'DENY'
}
