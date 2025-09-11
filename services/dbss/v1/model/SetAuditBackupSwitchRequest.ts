import { BackupSwitchRequest } from './BackupSwitchRequest';


export class SetAuditBackupSwitchRequest {
    private 'domain_id'?: string;
    private 'instance_id'?: string;
    public body?: BackupSwitchRequest;
    public constructor(domainId?: string, instanceId?: string) { 
        this['domain_id'] = domainId;
        this['instance_id'] = instanceId;
    }
    public withDomainId(domainId: string): SetAuditBackupSwitchRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withInstanceId(instanceId: string): SetAuditBackupSwitchRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: BackupSwitchRequest): SetAuditBackupSwitchRequest {
        this['body'] = body;
        return this;
    }
}