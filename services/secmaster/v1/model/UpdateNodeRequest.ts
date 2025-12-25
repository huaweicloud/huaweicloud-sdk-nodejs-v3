import { NodeExpansionInfo } from './NodeExpansionInfo';


export class UpdateNodeRequest {
    private 'workspace_id'?: string;
    private 'node_id'?: string;
    public body?: NodeExpansionInfo;
    public constructor(workspaceId?: string, nodeId?: string) { 
        this['workspace_id'] = workspaceId;
        this['node_id'] = nodeId;
    }
    public withWorkspaceId(workspaceId: string): UpdateNodeRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withNodeId(nodeId: string): UpdateNodeRequest {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withBody(body: NodeExpansionInfo): UpdateNodeRequest {
        this['body'] = body;
        return this;
    }
}