

export class CreatedBy {
    public type?: CreatedByTypeEnum | string;
    public identifier?: string;
    public constructor(type?: string, identifier?: string) { 
        this['type'] = type;
        this['identifier'] = identifier;
    }
    public withType(type: CreatedByTypeEnum | string): CreatedBy {
        this['type'] = type;
        return this;
    }
    public withIdentifier(identifier: string): CreatedBy {
        this['identifier'] = identifier;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreatedByTypeEnum {
    CUSTOMER = 'CUSTOMER',
    SERVICE = 'SERVICE'
}
