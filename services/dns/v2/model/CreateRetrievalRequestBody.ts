

export class CreateRetrievalRequestBody {
    private 'zone_name'?: string;
    public constructor() { 
    }
    public withZoneName(zoneName: string): CreateRetrievalRequestBody {
        this['zone_name'] = zoneName;
        return this;
    }
    public set zoneName(zoneName: string  | undefined) {
        this['zone_name'] = zoneName;
    }
    public get zoneName(): string | undefined {
        return this['zone_name'];
    }
}