

export class Identity {
    public name?: string;
    public location?: IdentityLocationEnum | string;
    public validation?: string;
    public constructor(name?: string, location?: string) { 
        this['name'] = name;
        this['location'] = location;
    }
    public withName(name: string): Identity {
        this['name'] = name;
        return this;
    }
    public withLocation(location: IdentityLocationEnum | string): Identity {
        this['location'] = location;
        return this;
    }
    public withValidation(validation: string): Identity {
        this['validation'] = validation;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum IdentityLocationEnum {
    HEADER = 'HEADER',
    QUERY = 'QUERY'
}
