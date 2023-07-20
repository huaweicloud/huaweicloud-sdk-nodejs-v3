import { DeleteSessionRequestBody } from './DeleteSessionRequestBody';


export class DeleteSessionRequest {
    private 'node_id'?: string;
    public body?: DeleteSessionRequestBody;
    public constructor(nodeId?: string) { 
        this['node_id'] = nodeId;
    }
    public withNodeId(nodeId: string): DeleteSessionRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withBody(body: DeleteSessionRequestBody): DeleteSessionRequest {
        this['body'] = body;
        return this;
    }
}