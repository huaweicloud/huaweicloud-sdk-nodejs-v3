

export class UpdateServiceSetUsingPUTRequestBody {
    public name?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateServiceSetUsingPUTRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateServiceSetUsingPUTRequestBody {
        this['description'] = description;
        return this;
    }
}