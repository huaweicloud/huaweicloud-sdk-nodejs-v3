

export class AgencyItem {
    public name?: AgencyItemNameEnum | string;
    public constructor() { 
    }
    public withName(name: AgencyItemNameEnum | string): AgencyItem {
        this['name'] = name;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AgencyItemNameEnum {
    CAE_TRUST = 'cae_trust'
}
