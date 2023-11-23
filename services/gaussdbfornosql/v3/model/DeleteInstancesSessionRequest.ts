import { DeleteInstancesSessionRequestBody } from './DeleteInstancesSessionRequestBody';


export class DeleteInstancesSessionRequest {
    private 'node_id'?: string;
    public body?: DeleteInstancesSessionRequestBody;
    public constructor(nodeId?: string) { 
        this['node_id'] = nodeId;
    }
    public withNodeId(nodeId: string): DeleteInstancesSessionRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withBody(body: DeleteInstancesSessionRequestBody): DeleteInstancesSessionRequest {
        this['body'] = body;
        return this;
    }
}