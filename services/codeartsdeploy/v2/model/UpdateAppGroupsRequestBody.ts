

export class UpdateAppGroupsRequestBody {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): UpdateAppGroupsRequestBody {
        this['name'] = name;
        return this;
    }
}