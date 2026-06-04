import { BindPublicGatewayRequestBody } from './BindPublicGatewayRequestBody';


export class BindPublicGatewayRequest {
    private 'instance_id'?: string;
    private 'node_id'?: string;
    public body?: BindPublicGatewayRequestBody;
    public constructor(instanceId?: string, nodeId?: string) { 
        this['instance_id'] = instanceId;
        this['node_id'] = nodeId;
    }
    public withInstanceId(instanceId: string): BindPublicGatewayRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): BindPublicGatewayRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withBody(body: BindPublicGatewayRequestBody): BindPublicGatewayRequest {
        this['body'] = body;
        return this;
    }
}