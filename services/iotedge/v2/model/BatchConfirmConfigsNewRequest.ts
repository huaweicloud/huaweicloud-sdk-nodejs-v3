import { ConfirmIaConfigsRequestBody } from './ConfirmIaConfigsRequestBody';


export class BatchConfirmConfigsNewRequest {
    private 'node_id'?: string;
    private 'ia_id'?: string;
    public body?: ConfirmIaConfigsRequestBody;
    public constructor(nodeId?: string, iaId?: string) { 
        this['node_id'] = nodeId;
        this['ia_id'] = iaId;
    }
    public withNodeId(nodeId: string): BatchConfirmConfigsNewRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withIaId(iaId: string): BatchConfirmConfigsNewRequest {
        this['ia_id'] = iaId;
        return this;
    }
    public set iaId(iaId: string  | undefined) {
        this['ia_id'] = iaId;
    }
    public get iaId(): string | undefined {
        return this['ia_id'];
    }
    public withBody(body: ConfirmIaConfigsRequestBody): BatchConfirmConfigsNewRequest {
        this['body'] = body;
        return this;
    }
}