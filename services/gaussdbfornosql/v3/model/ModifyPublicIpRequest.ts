import { ModifyPublicIpRequestBody } from './ModifyPublicIpRequestBody';


export class ModifyPublicIpRequest {
    private 'instance_id'?: string;
    private 'node_id'?: string;
    public body?: ModifyPublicIpRequestBody;
    public constructor(instanceId?: string, nodeId?: string) { 
        this['instance_id'] = instanceId;
        this['node_id'] = nodeId;
    }
    public withInstanceId(instanceId: string): ModifyPublicIpRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): ModifyPublicIpRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withBody(body: ModifyPublicIpRequestBody): ModifyPublicIpRequest {
        this['body'] = body;
        return this;
    }
}