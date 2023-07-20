
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class MigrateCompositeHostsResponse extends SdkResponse {
    private 'host_ids'?: Array<string>;
    private 'policy_id'?: string;
    private 'certificate_id'?: string;
    public constructor() { 
        super();
    }
    public withHostIds(hostIds: Array<string>): MigrateCompositeHostsResponse {
        this['host_ids'] = hostIds;
        return this;
    }
    public set hostIds(hostIds: Array<string>  | undefined) {
        this['host_ids'] = hostIds;
    }
    public get hostIds(): Array<string> | undefined {
        return this['host_ids'];
    }
    public withPolicyId(policyId: string): MigrateCompositeHostsResponse {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withCertificateId(certificateId: string): MigrateCompositeHostsResponse {
        this['certificate_id'] = certificateId;
        return this;
    }
    public set certificateId(certificateId: string  | undefined) {
        this['certificate_id'] = certificateId;
    }
    public get certificateId(): string | undefined {
        return this['certificate_id'];
    }
}