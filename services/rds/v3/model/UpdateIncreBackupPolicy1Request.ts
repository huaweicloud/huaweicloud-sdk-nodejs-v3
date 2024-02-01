import { UpdateIncreBackupPolicy1RequestBody } from './UpdateIncreBackupPolicy1RequestBody';


export class UpdateIncreBackupPolicy1Request {
    private 'instance_id'?: string;
    public body?: UpdateIncreBackupPolicy1RequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): UpdateIncreBackupPolicy1Request {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: UpdateIncreBackupPolicy1RequestBody): UpdateIncreBackupPolicy1Request {
        this['body'] = body;
        return this;
    }
}