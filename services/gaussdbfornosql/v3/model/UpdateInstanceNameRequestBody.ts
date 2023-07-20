

export class UpdateInstanceNameRequestBody {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): UpdateInstanceNameRequestBody {
        this['name'] = name;
        return this;
    }
}