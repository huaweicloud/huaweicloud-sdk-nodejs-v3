
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSummaryUsageDataResponse extends SdkResponse {
    private 'resource_type'?: string;
    private 'business_type'?: string;
    private 'number'?: number;
    public usage?: number;
    public unit?: ShowSummaryUsageDataResponseUnitEnum | string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withResourceType(resourceType: string): ShowSummaryUsageDataResponse {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withBusinessType(businessType: string): ShowSummaryUsageDataResponse {
        this['business_type'] = businessType;
        return this;
    }
    public set businessType(businessType: string  | undefined) {
        this['business_type'] = businessType;
    }
    public get businessType(): string | undefined {
        return this['business_type'];
    }
    public withModelNumber(modelNumber: number): ShowSummaryUsageDataResponse {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: number  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): number | undefined {
        return this['number'];
    }
    public withUsage(usage: number): ShowSummaryUsageDataResponse {
        this['usage'] = usage;
        return this;
    }
    public withUnit(unit: ShowSummaryUsageDataResponseUnitEnum | string): ShowSummaryUsageDataResponse {
        this['unit'] = unit;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowSummaryUsageDataResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSummaryUsageDataResponseUnitEnum {
    MIN = 'MIN',
    HOUR = 'HOUR'
}
