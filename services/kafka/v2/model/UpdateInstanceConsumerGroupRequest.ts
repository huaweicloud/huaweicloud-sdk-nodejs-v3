import { CreateGroupReq } from './CreateGroupReq';


export class UpdateInstanceConsumerGroupRequest {
    public engine?: string;
    private 'instance_id'?: string;
    public group?: string;
    public body?: CreateGroupReq;
    public constructor(engine?: string, instanceId?: string, group?: string) { 
        this['engine'] = engine;
        this['instance_id'] = instanceId;
        this['group'] = group;
    }
    public withEngine(engine: string): UpdateInstanceConsumerGroupRequest {
        this['engine'] = engine;
        return this;
    }
    public withInstanceId(instanceId: string): UpdateInstanceConsumerGroupRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withGroup(group: string): UpdateInstanceConsumerGroupRequest {
        this['group'] = group;
        return this;
    }
    public withBody(body: CreateGroupReq): UpdateInstanceConsumerGroupRequest {
        this['body'] = body;
        return this;
    }
}