import { UpdateGlobalEip } from './UpdateGlobalEip';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AssociateInstanceResponse extends SdkResponse {
    private 'global_eip'?: UpdateGlobalEip;
    private 'job_id'?: string;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withGlobalEip(globalEip: UpdateGlobalEip): AssociateInstanceResponse {
        this['global_eip'] = globalEip;
        return this;
    }
    public set globalEip(globalEip: UpdateGlobalEip  | undefined) {
        this['global_eip'] = globalEip;
    }
    public get globalEip(): UpdateGlobalEip | undefined {
        return this['global_eip'];
    }
    public withJobId(jobId: string): AssociateInstanceResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withXRequestId(xRequestId: string): AssociateInstanceResponse {
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