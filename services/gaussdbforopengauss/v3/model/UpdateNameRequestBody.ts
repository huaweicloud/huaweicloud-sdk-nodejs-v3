

export class UpdateNameRequestBody {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): UpdateNameRequestBody {
        this['name'] = name;
        return this;
    }
}