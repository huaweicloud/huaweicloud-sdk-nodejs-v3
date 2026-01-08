

export class ListAssetTaskInfoRequest {
    private 'X-Sdk-Date'?: string;
    public type?: string;
    private 'asset_id'?: string;
    private 'create_time_after'?: string;
    private 'create_time_before'?: string;
    private 'end_time_after'?: string;
    private 'end_time_before'?: string;
    public status?: Array<string>;
    public marker?: string;
    public limit?: number;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): ListAssetTaskInfoRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withType(type: string): ListAssetTaskInfoRequest {
        this['type'] = type;
        return this;
    }
    public withAssetId(assetId: string): ListAssetTaskInfoRequest {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withCreateTimeAfter(createTimeAfter: string): ListAssetTaskInfoRequest {
        this['create_time_after'] = createTimeAfter;
        return this;
    }
    public set createTimeAfter(createTimeAfter: string  | undefined) {
        this['create_time_after'] = createTimeAfter;
    }
    public get createTimeAfter(): string | undefined {
        return this['create_time_after'];
    }
    public withCreateTimeBefore(createTimeBefore: string): ListAssetTaskInfoRequest {
        this['create_time_before'] = createTimeBefore;
        return this;
    }
    public set createTimeBefore(createTimeBefore: string  | undefined) {
        this['create_time_before'] = createTimeBefore;
    }
    public get createTimeBefore(): string | undefined {
        return this['create_time_before'];
    }
    public withEndTimeAfter(endTimeAfter: string): ListAssetTaskInfoRequest {
        this['end_time_after'] = endTimeAfter;
        return this;
    }
    public set endTimeAfter(endTimeAfter: string  | undefined) {
        this['end_time_after'] = endTimeAfter;
    }
    public get endTimeAfter(): string | undefined {
        return this['end_time_after'];
    }
    public withEndTimeBefore(endTimeBefore: string): ListAssetTaskInfoRequest {
        this['end_time_before'] = endTimeBefore;
        return this;
    }
    public set endTimeBefore(endTimeBefore: string  | undefined) {
        this['end_time_before'] = endTimeBefore;
    }
    public get endTimeBefore(): string | undefined {
        return this['end_time_before'];
    }
    public withStatus(status: Array<string>): ListAssetTaskInfoRequest {
        this['status'] = status;
        return this;
    }
    public withMarker(marker: string): ListAssetTaskInfoRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListAssetTaskInfoRequest {
        this['limit'] = limit;
        return this;
    }
}