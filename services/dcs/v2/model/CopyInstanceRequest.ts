import { BackupInstanceBody } from './BackupInstanceBody';


export class CopyInstanceRequest {
    private 'instance_id': string | undefined;
    public body?: BackupInstanceBody;
    public constructor(instanceId?: any) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CopyInstanceRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withBody(body: BackupInstanceBody): CopyInstanceRequest {
        this['body'] = body;
        return this;
    }
}