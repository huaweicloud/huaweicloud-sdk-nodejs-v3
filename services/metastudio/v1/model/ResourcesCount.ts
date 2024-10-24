

export class ResourcesCount {
    private 'business_type'?: string;
    public count?: number;
    private 'charging_mode'?: string;
    private 'resource_source'?: string;
    public constructor() { 
    }
    public withBusinessType(businessType: string): ResourcesCount {
        this['business_type'] = businessType;
        return this;
    }
    public set businessType(businessType: string  | undefined) {
        this['business_type'] = businessType;
    }
    public get businessType(): string | undefined {
        return this['business_type'];
    }
    public withCount(count: number): ResourcesCount {
        this['count'] = count;
        return this;
    }
    public withChargingMode(chargingMode: string): ResourcesCount {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: string  | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode(): string | undefined {
        return this['charging_mode'];
    }
    public withResourceSource(resourceSource: string): ResourcesCount {
        this['resource_source'] = resourceSource;
        return this;
    }
    public set resourceSource(resourceSource: string  | undefined) {
        this['resource_source'] = resourceSource;
    }
    public get resourceSource(): string | undefined {
        return this['resource_source'];
    }
}