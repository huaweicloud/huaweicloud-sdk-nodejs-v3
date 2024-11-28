

export class ShowUserDisclaimerRequest {
    public fields?: Array<ShowUserDisclaimerRequestFieldsEnum> | Array<string>;
    public constructor() { 
    }
    public withFields(fields: Array<ShowUserDisclaimerRequestFieldsEnum> | Array<string>): ShowUserDisclaimerRequest {
        this['fields'] = fields;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowUserDisclaimerRequestFieldsEnum {
    DOMAIN_ID = 'domain_id',
    CREATED_AT = 'created_at',
    UPDATED_AT = 'updated_at'
}
