import { ExpandDdmInstanceNodesRequestBody } from './ExpandDdmInstanceNodesRequestBody';


export class ExpandDdmInstanceNodesRequest {
    private 'instance_id'?: string;
    public body?: ExpandDdmInstanceNodesRequestBody;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ExpandDdmInstanceNodesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: ExpandDdmInstanceNodesRequestBody): ExpandDdmInstanceNodesRequest {
        this['body'] = body;
        return this;
    }
}