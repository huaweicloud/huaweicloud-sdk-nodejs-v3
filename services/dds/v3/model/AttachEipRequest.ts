import { AttachEipRequestBody } from './AttachEipRequestBody';


export class AttachEipRequest {
    private 'node_id'?: string;
    public body?: AttachEipRequestBody;
    public constructor(nodeId?: string) { 
        this['node_id'] = nodeId;
    }
    public withNodeId(nodeId: string): AttachEipRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withBody(body: AttachEipRequestBody): AttachEipRequest {
        this['body'] = body;
        return this;
    }
}