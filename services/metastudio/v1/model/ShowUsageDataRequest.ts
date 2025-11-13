

export class ShowUsageDataRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    public limit?: number;
    public offset?: number;
    private 'X-App-UserId'?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'user_id'?: string;
    private 'resource_type'?: string;
    private 'business_type'?: string;
    public unit?: ShowUsageDataRequestUnitEnum | string;
    public constructor(startTime?: string, endTime?: string) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
    }
    public withAuthorization(authorization: string): ShowUsageDataRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ShowUsageDataRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): ShowUsageDataRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withLimit(limit: number): ShowUsageDataRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowUsageDataRequest {
        this['offset'] = offset;
        return this;
    }
    public withXAppUserId(xAppUserId: string): ShowUsageDataRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withStartTime(startTime: string): ShowUsageDataRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowUsageDataRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withUserId(userId: string): ShowUsageDataRequest {
        this['user_id'] = userId;
        return this;
    }
    public set userId(userId: string  | undefined) {
        this['user_id'] = userId;
    }
    public get userId(): string | undefined {
        return this['user_id'];
    }
    public withResourceType(resourceType: string): ShowUsageDataRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withBusinessType(businessType: string): ShowUsageDataRequest {
        this['business_type'] = businessType;
        return this;
    }
    public set businessType(businessType: string  | undefined) {
        this['business_type'] = businessType;
    }
    public get businessType(): string | undefined {
        return this['business_type'];
    }
    public withUnit(unit: ShowUsageDataRequestUnitEnum | string): ShowUsageDataRequest {
        this['unit'] = unit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowUsageDataRequestUnitEnum {
    MIN = 'MIN',
    HOUR = 'HOUR'
}
