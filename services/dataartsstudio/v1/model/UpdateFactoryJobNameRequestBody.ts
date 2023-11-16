

export class UpdateFactoryJobNameRequestBody {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): UpdateFactoryJobNameRequestBody {
        this['name'] = name;
        return this;
    }
}