

export class CreateFunctionVersionRequestBody {
    public digest?: string;
    public version?: string;
    public description?: string;
    public constructor() { 
    }
    public withDigest(digest: string): CreateFunctionVersionRequestBody {
        this['digest'] = digest;
        return this;
    }
    public withVersion(version: string): CreateFunctionVersionRequestBody {
        this['version'] = version;
        return this;
    }
    public withDescription(description: string): CreateFunctionVersionRequestBody {
        this['description'] = description;
        return this;
    }
}