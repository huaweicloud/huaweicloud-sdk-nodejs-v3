

export class CreateAuthorizeTxtRecordRequestBody {
    private 'zone_name'?: string;
    public constructor(zoneName?: string) { 
        this['zone_name'] = zoneName;
    }
    public withZoneName(zoneName: string): CreateAuthorizeTxtRecordRequestBody {
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