

export class UpdateDdmInstanceNameRequestBody {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): UpdateDdmInstanceNameRequestBody {
        this['name'] = name;
        return this;
    }
}