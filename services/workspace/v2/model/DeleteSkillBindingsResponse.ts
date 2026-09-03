import { BindingFailedDetail } from './BindingFailedDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteSkillBindingsResponse extends SdkResponse {
    public total?: number;
    private 'success_count'?: number;
    private 'failed_count'?: number;
    private 'failed_details'?: Array<BindingFailedDetail>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withTotal(total: number): DeleteSkillBindingsResponse {
        this['total'] = total;
        return this;
    }
    public withSuccessCount(successCount: number): DeleteSkillBindingsResponse {
        this['success_count'] = successCount;
        return this;
    }
    public set successCount(successCount: number  | undefined) {
        this['success_count'] = successCount;
    }
    public get successCount(): number | undefined {
        return this['success_count'];
    }
    public withFailedCount(failedCount: number): DeleteSkillBindingsResponse {
        this['failed_count'] = failedCount;
        return this;
    }
    public set failedCount(failedCount: number  | undefined) {
        this['failed_count'] = failedCount;
    }
    public get failedCount(): number | undefined {
        return this['failed_count'];
    }
    public withFailedDetails(failedDetails: Array<BindingFailedDetail>): DeleteSkillBindingsResponse {
        this['failed_details'] = failedDetails;
        return this;
    }
    public set failedDetails(failedDetails: Array<BindingFailedDetail>  | undefined) {
        this['failed_details'] = failedDetails;
    }
    public get failedDetails(): Array<BindingFailedDetail> | undefined {
        return this['failed_details'];
    }
    public withXRequestId(xRequestId: string): DeleteSkillBindingsResponse {
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