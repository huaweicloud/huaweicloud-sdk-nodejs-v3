

export class DeleteReadonlyNodesRequestBody {
    private 'node_ids'?: Array<string>;
    public constructor(nodeIds?: Array<string>) { 
        this['node_ids'] = nodeIds;
    }
    public withNodeIds(nodeIds: Array<string>): DeleteReadonlyNodesRequestBody {
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