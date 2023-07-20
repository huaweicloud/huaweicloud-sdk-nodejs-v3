

export class GaussDBforOpenGaussCreateSchemaReq {
    public name?: string;
    public owner?: string;
    public constructor(name?: string, owner?: string) { 
        this['name'] = name;
        this['owner'] = owner;
    }
    public withName(name: string): GaussDBforOpenGaussCreateSchemaReq {
        this['name'] = name;
        return this;
    }
    public withOwner(owner: string): GaussDBforOpenGaussCreateSchemaReq {
        this['owner'] = owner;
        return this;
    }
}