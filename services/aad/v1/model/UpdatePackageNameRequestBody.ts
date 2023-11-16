

export class UpdatePackageNameRequestBody {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): UpdatePackageNameRequestBody {
        this['name'] = name;
        return this;
    }
}