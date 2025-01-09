
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateWorkspaceResponse extends SdkResponse {
    private 'job_id'?: string;
    private 'enterprise_id'?: string;
    private 'dc_vnc_ip'?: string;
    public constructor() { 
        super();
    }
    public withJobId(jobId: string): UpdateWorkspaceResponse {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withEnterpriseId(enterpriseId: string): UpdateWorkspaceResponse {
        this['enterprise_id'] = enterpriseId;
        return this;
    }
    public set enterpriseId(enterpriseId: string  | undefined) {
        this['enterprise_id'] = enterpriseId;
    }
    public get enterpriseId(): string | undefined {
        return this['enterprise_id'];
    }
    public withDcVncIp(dcVncIp: string): UpdateWorkspaceResponse {
        this['dc_vnc_ip'] = dcVncIp;
        return this;
    }
    public set dcVncIp(dcVncIp: string  | undefined) {
        this['dc_vnc_ip'] = dcVncIp;
    }
    public get dcVncIp(): string | undefined {
        return this['dc_vnc_ip'];
    }
}