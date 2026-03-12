

export class UpdateCSRRequestBody {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): UpdateCSRRequestBody {
        this['name'] = name;
        return this;
    }
}