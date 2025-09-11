import { BackupPageRequest } from './BackupPageRequest';


export class ListAuditBackupInfoRequest {
    private 'instance_id'?: string;
    public body?: BackupPageRequest;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListAuditBackupInfoRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: BackupPageRequest): ListAuditBackupInfoRequest {
        this['body'] = body;
        return this;
    }
}