import { MetadataDeleteReq } from './MetadataDeleteReq';


export class DeleteRocketMqMigrationTaskRequest {
    private 'instance_id': string | undefined;
    public body?: MetadataDeleteReq;
    public constructor(instanceId?: any) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): DeleteRocketMqMigrationTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withBody(body: MetadataDeleteReq): DeleteRocketMqMigrationTaskRequest {
        this['body'] = body;
        return this;
    }
}