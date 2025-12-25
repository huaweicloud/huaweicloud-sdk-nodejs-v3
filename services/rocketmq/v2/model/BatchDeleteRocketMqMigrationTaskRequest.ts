import { MetadataDeleteReq } from './MetadataDeleteReq';


export class BatchDeleteRocketMqMigrationTaskRequest {
    private 'instance_id'?: string;
    public body?: MetadataDeleteReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): BatchDeleteRocketMqMigrationTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: MetadataDeleteReq): BatchDeleteRocketMqMigrationTaskRequest {
        this['body'] = body;
        return this;
    }
}