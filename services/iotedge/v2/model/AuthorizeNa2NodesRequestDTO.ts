

export class AuthorizeNa2NodesRequestDTO {
    private 'node_ids'?: object;
    public constructor(nodeIds?: object) { 
        this['node_ids'] = nodeIds;
    }
    public withNodeIds(nodeIds: object): AuthorizeNa2NodesRequestDTO {
        this['node_ids'] = nodeIds;
        return this;
    }
    public set nodeIds(nodeIds: object  | undefined) {
        this['node_ids'] = nodeIds;
    }
    public get nodeIds(): object | undefined {
        return this['node_ids'];
    }
}