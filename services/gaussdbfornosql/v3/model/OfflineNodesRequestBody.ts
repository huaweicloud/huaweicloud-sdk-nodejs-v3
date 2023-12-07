

export class OfflineNodesRequestBody {
    public action?: string;
    private 'node_ids'?: Array<string>;
    public constructor(action?: string, nodeIds?: Array<string>) { 
        this['action'] = action;
        this['node_ids'] = nodeIds;
    }
    public withAction(action: string): OfflineNodesRequestBody {
        this['action'] = action;
        return this;
    }
    public withNodeIds(nodeIds: Array<string>): OfflineNodesRequestBody {
        this['node_ids'] = nodeIds;
        return this;
    }
    public set nodeIds(nodeIds: Array<string>  | undefined) {
        this['node_ids'] = nodeIds;
    }
    public get nodeIds(): Array<string> | undefined {
        return this['node_ids'];
    }
}