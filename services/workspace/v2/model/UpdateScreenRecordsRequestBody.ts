

export class UpdateScreenRecordsRequestBody {
    private 'traffic_limit_type'?: string;
    public constructor(trafficLimitType?: string) { 
        this['traffic_limit_type'] = trafficLimitType;
    }
    public withTrafficLimitType(trafficLimitType: string): UpdateScreenRecordsRequestBody {
        this['traffic_limit_type'] = trafficLimitType;
        return this;
    }
    public set trafficLimitType(trafficLimitType: string  | undefined) {
        this['traffic_limit_type'] = trafficLimitType;
    }
    public get trafficLimitType(): string | undefined {
        return this['traffic_limit_type'];
    }
}