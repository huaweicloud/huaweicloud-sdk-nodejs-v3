

export class ImportTrafficRequestBody {
    private 'traffic_type'?: string;
    private 'phone_ids'?: Array<string>;
    public constructor(trafficType?: string, phoneIds?: Array<string>) { 
        this['traffic_type'] = trafficType;
        this['phone_ids'] = phoneIds;
    }
    public withTrafficType(trafficType: string): ImportTrafficRequestBody {
        this['traffic_type'] = trafficType;
        return this;
    }
    public set trafficType(trafficType: string  | undefined) {
        this['traffic_type'] = trafficType;
    }
    public get trafficType(): string | undefined {
        return this['traffic_type'];
    }
    public withPhoneIds(phoneIds: Array<string>): ImportTrafficRequestBody {
        this['phone_ids'] = phoneIds;
        return this;
    }
    public set phoneIds(phoneIds: Array<string>  | undefined) {
        this['phone_ids'] = phoneIds;
    }
    public get phoneIds(): Array<string> | undefined {
        return this['phone_ids'];
    }
}