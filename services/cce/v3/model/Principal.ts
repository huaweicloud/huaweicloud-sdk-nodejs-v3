

export class Principal {
    public type?: PrincipalTypeEnum | string;
    public ids?: Array<string>;
    public constructor(type?: string, ids?: Array<string>) { 
        this['type'] = type;
        this['ids'] = ids;
    }
    public withType(type: PrincipalTypeEnum | string): Principal {
        this['type'] = type;
        return this;
    }
    public withIds(ids: Array<string>): Principal {
        this['ids'] = ids;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PrincipalTypeEnum {
    USER = 'user',
    GROUP = 'group',
    AGENCY = 'agency'
}
