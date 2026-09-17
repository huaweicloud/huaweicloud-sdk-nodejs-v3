import { ConfirmIaConfigsRequestBody } from './ConfirmIaConfigsRequestBody';


export class BatchConfirmConfigsRequest {
    private 'node_id'?: string;
    private 'ia_id'?: string;
    public action?: string;
    public body?: ConfirmIaConfigsRequestBody;
    public constructor(nodeId?: string, iaId?: string, action?: string) { 
        this['node_id'] = nodeId;
        this['ia_id'] = iaId;
        this['action'] = action;
    }
    public withNodeId(nodeId: string): BatchConfirmConfigsRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withIaId(iaId: string): BatchConfirmConfigsRequest {
        this['ia_id'] = iaId;
        return this;
    }
    public set iaId(iaId: string  | undefined) {
        this['ia_id'] = iaId;
    }
    public get iaId(): string | undefined {
        return this['ia_id'];
    }
    public withAction(action: string): BatchConfirmConfigsRequest {
        this['action'] = action;
        return this;
    }
    public withBody(body: ConfirmIaConfigsRequestBody): BatchConfirmConfigsRequest {
        this['body'] = body;
        return this;
    }
}