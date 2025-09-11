import { RiskBackupConfig } from './RiskBackupConfig';


export class UpdateAuditRiskBucketPathRequest {
    private 'domain_id'?: string;
    private 'instance_id'?: string;
    public body?: RiskBackupConfig;
    public constructor(domainId?: string, instanceId?: string) { 
        this['domain_id'] = domainId;
        this['instance_id'] = instanceId;
    }
    public withDomainId(domainId: string): UpdateAuditRiskBucketPathRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withInstanceId(instanceId: string): UpdateAuditRiskBucketPathRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: RiskBackupConfig): UpdateAuditRiskBucketPathRequest {
        this['body'] = body;
        return this;
    }
}