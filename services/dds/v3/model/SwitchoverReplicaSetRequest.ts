import { SwitchoverReplicaSetRequestBody } from './SwitchoverReplicaSetRequestBody';


export class SwitchoverReplicaSetRequest {
    private 'instance_id'?: string;
    public body?: SwitchoverReplicaSetRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SwitchoverReplicaSetRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: SwitchoverReplicaSetRequestBody): SwitchoverReplicaSetRequest {
        this['body'] = body;
        return this;
    }
}