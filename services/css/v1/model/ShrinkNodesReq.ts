

export class ShrinkNodesReq {
    public shrinkNodes?: Array<string>;
    public constructor(shrinkNodes?: Array<string>) { 
        this['shrinkNodes'] = shrinkNodes;
    }
    public withShrinkNodes(shrinkNodes: Array<string>): ShrinkNodesReq {
        this['shrinkNodes'] = shrinkNodes;
        return this;
    }
}