import { NoSqlCreateBackupRequestBody } from './NoSqlCreateBackupRequestBody';


export class CreateBackRequest {
    private 'instance_id'?: string;
    public body?: NoSqlCreateBackupRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): CreateBackRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: NoSqlCreateBackupRequestBody): CreateBackRequest {
        this['body'] = body;
        return this;
    }
}