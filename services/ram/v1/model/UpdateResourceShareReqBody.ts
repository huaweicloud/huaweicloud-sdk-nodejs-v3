

export class UpdateResourceShareReqBody {
    public name?: string;
    public description?: string;
    private 'allow_external_principals'?: boolean;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): UpdateResourceShareReqBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateResourceShareReqBody {
        this['description'] = description;
        return this;
    }
    public withAllowExternalPrincipals(allowExternalPrincipals: boolean): UpdateResourceShareReqBody {
        this['allow_external_principals'] = allowExternalPrincipals;
        return this;
    }
    public set allowExternalPrincipals(allowExternalPrincipals: boolean  | undefined) {
        this['allow_external_principals'] = allowExternalPrincipals;
    }
    public get allowExternalPrincipals(): boolean | undefined {
        return this['allow_external_principals'];
    }
}