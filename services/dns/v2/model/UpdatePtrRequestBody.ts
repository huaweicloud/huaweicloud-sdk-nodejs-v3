

export class UpdatePtrRequestBody {
    public ptrdnames?: Array<string>;
    public description?: string;
    public ttl?: number;
    public constructor(ptrdnames?: Array<string>) { 
        this['ptrdnames'] = ptrdnames;
    }
    public withPtrdnames(ptrdnames: Array<string>): UpdatePtrRequestBody {
        this['ptrdnames'] = ptrdnames;
        return this;
    }
    public withDescription(description: string): UpdatePtrRequestBody {
        this['description'] = description;
        return this;
    }
    public withTtl(ttl: number): UpdatePtrRequestBody {
        this['ttl'] = ttl;
        return this;
    }
}