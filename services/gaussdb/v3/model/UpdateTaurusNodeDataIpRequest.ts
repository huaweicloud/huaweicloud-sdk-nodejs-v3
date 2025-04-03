import { ModifyNodeDataIpRequest } from './ModifyNodeDataIpRequest';


export class UpdateTaurusNodeDataIpRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'node_id'?: string;
    public body?: ModifyNodeDataIpRequest;
    public constructor(instanceId?: string, nodeId?: string) { 
        this['instance_id'] = instanceId;
        this['node_id'] = nodeId;
    }
    public withXLanguage(xLanguage: string): UpdateTaurusNodeDataIpRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): UpdateTaurusNodeDataIpRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNodeId(nodeId: string): UpdateTaurusNodeDataIpRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withBody(body: ModifyNodeDataIpRequest): UpdateTaurusNodeDataIpRequest {
        this['body'] = body;
        return this;
    }
}