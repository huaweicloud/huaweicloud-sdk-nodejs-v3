

export class UpdatePrivateNatOption {
    public name?: string;
    public description?: string;
    public spec?: UpdatePrivateNatOptionSpecEnum | string;
    public constructor() { 
    }
    public withName(name: string): UpdatePrivateNatOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdatePrivateNatOption {
        this['description'] = description;
        return this;
    }
    public withSpec(spec: UpdatePrivateNatOptionSpecEnum | string): UpdatePrivateNatOption {
        this['spec'] = spec;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdatePrivateNatOptionSpecEnum {
    SMALL = 'Small',
    MEDIUM = 'Medium',
    LARGE = 'Large',
    EXTRA_LARGE = 'Extra-large'
}
