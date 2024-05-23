

export class UpdateOrganizationalUnitReqBody {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): UpdateOrganizationalUnitReqBody {
        this['name'] = name;
        return this;
    }
}