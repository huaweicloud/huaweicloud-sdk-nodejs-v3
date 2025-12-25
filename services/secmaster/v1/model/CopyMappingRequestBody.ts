

export class CopyMappingRequestBody {
    public name?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CopyMappingRequestBody {
        this['name'] = name;
        return this;
    }
}