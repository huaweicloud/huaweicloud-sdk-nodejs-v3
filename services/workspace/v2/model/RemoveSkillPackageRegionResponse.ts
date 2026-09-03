import { ExpandPackageRegionResp } from './ExpandPackageRegionResp';
import { RegionFailedDetail } from './RegionFailedDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RemoveSkillPackageRegionResponse extends SdkResponse {
    public total?: number;
    private 'success_count'?: number;
    private 'failed_count'?: number;
    private 'failed_details'?: Array<RegionFailedDetail>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withTotal(total: number): RemoveSkillPackageRegionResponse {
        this['total'] = total;
        return this;
    }
    public withSuccessCount(successCount: number): RemoveSkillPackageRegionResponse {
        this['success_count'] = successCount;
        return this;
    }
    public set successCount(successCount: number  | undefined) {
        this['success_count'] = successCount;
    }
    public get successCount(): number | undefined {
        return this['success_count'];
    }
    public withFailedCount(failedCount: number): RemoveSkillPackageRegionResponse {
        this['failed_count'] = failedCount;
        return this;
    }
    public set failedCount(failedCount: number  | undefined) {
        this['failed_count'] = failedCount;
    }
    public get failedCount(): number | undefined {
        return this['failed_count'];
    }
    public withFailedDetails(failedDetails: Array<RegionFailedDetail>): RemoveSkillPackageRegionResponse {
        this['failed_details'] = failedDetails;
        return this;
    }
    public set failedDetails(failedDetails: Array<RegionFailedDetail>  | undefined) {
        this['failed_details'] = failedDetails;
    }
    public get failedDetails(): Array<RegionFailedDetail> | undefined {
        return this['failed_details'];
    }
    public withXRequestId(xRequestId: string): RemoveSkillPackageRegionResponse {
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