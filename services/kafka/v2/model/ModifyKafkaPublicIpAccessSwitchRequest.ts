import { ModifyKafkaPublicIPAccessSwitchReq } from './ModifyKafkaPublicIPAccessSwitchReq';


export class ModifyKafkaPublicIpAccessSwitchRequest {
    private 'instance_id'?: string;
    public body?: ModifyKafkaPublicIPAccessSwitchReq;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ModifyKafkaPublicIpAccessSwitchRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ModifyKafkaPublicIPAccessSwitchReq): ModifyKafkaPublicIpAccessSwitchRequest {
        this['body'] = body;
        return this;
    }
}