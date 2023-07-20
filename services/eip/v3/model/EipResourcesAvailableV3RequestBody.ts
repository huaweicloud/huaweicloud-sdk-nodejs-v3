

export class EipResourcesAvailableV3RequestBody {
    public type?: string;
    public limit?: number;
    public constructor(limit?: number) { 
        this['limit'] = limit;
    }
    public withType(type: string): EipResourcesAvailableV3RequestBody {
        this['type'] = type;
        return this;
    }
    public withLimit(limit: number): EipResourcesAvailableV3RequestBody {
        this['limit'] = limit;
        return this;
    }
}