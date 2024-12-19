

export class ChangeNodesStartStopStatusBody {
    private 'node_ids'?: Array<string>;
    public action?: string;
    public constructor() { 
    }
    public withNodeIds(nodeIds: Array<string>): ChangeNodesStartStopStatusBody {
        this['node_ids'] = nodeIds;
        return this;
    }
    public set nodeIds(nodeIds: Array<string>  | undefined) {
        this['node_ids'] = nodeIds;
    }
    public get nodeIds(): Array<string> | undefined {
        return this['node_ids'];
    }
    public withAction(action: string): ChangeNodesStartStopStatusBody {
        this['action'] = action;
        return this;
    }
}