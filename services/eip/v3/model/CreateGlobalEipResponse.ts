import { CreateGlobalEip } from './CreateGlobalEip';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateGlobalEipResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'global_eip'?: CreateGlobalEip;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): CreateGlobalEipResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withGlobalEip(globalEip: CreateGlobalEip): CreateGlobalEipResponse {
        this['global_eip'] = globalEip;
        return this;
    }
    public set globalEip(globalEip: CreateGlobalEip  | undefined) {
        this['global_eip'] = globalEip;
    }
    public get globalEip(): CreateGlobalEip | undefined {
        return this['global_eip'];
    }
    public withXRequestId(xRequestId: string): CreateGlobalEipResponse {
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