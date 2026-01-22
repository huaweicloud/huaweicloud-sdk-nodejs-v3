

export class UserRespGroupPerms {
    public name?: string;
    public perm?: UserRespGroupPermsPermEnum | string;
    public constructor() { 
    }
    public withName(name: string): UserRespGroupPerms {
        this['name'] = name;
        return this;
    }
    public withPerm(perm: UserRespGroupPermsPermEnum | string): UserRespGroupPerms {
        this['perm'] = perm;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UserRespGroupPermsPermEnum {
    SUB = 'SUB',
    DENY = 'DENY'
}
