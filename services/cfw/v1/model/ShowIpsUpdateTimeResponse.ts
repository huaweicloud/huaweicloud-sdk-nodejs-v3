import { IpsRuleUpdateTimeVO } from './IpsRuleUpdateTimeVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIpsUpdateTimeResponse extends SdkResponse {
    public data?: Array<IpsRuleUpdateTimeVO>;
    private 'error_code'?: string;
    private 'error_description'?: string;
    private 'fail_reason'?: string;
    private 'job_id'?: string;
    private 'order_id'?: string;
    private 'trace_id'?: string;
    public constructor() { 
        super();
    }
    public withData(data: Array<IpsRuleUpdateTimeVO>): ShowIpsUpdateTimeResponse {
        this['data'] = data;
        return this;
    }
    public withErrorCode(errorCode: string): ShowIpsUpdateTimeResponse {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorDescription(errorDescription: string): ShowIpsUpdateTimeResponse {
        this['error_description'] = errorDescription;
        return this;
    }
    public set errorDescription(errorDescription: string  | undefined) {
        this['error_description'] = errorDescription;
    }
    public get errorDescription(): string | undefined {
        return this['error_description'];
    }
    public withFailReason(failReason: string): ShowIpsUpdateTimeResponse {
        this['fail_reason'] = failReason;
        return this;
    }
    public set failReason(failReason: string  | undefined) {
        this['fail_reason'] = failReason;
    }
    public get failReason(): string | undefined {
        return this['fail_reason'];
    }
    public withJobId(jobId: string): ShowIpsUpdateTimeResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withOrderId(orderId: string): ShowIpsUpdateTimeResponse {
        this['order_id'] = orderId;
        return this;
    }
    public set orderId(orderId: string  | undefined) {
        this['order_id'] = orderId;
    }
    public get orderId(): string | undefined {
        return this['order_id'];
    }
    public withTraceId(traceId: string): ShowIpsUpdateTimeResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
}