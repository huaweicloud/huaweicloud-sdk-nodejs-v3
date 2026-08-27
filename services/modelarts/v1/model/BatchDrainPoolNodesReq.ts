

export class BatchDrainPoolNodesReq {
    public nodeNames?: Array<string>;
    public constructor(nodeNames?: Array<string>) { 
        this['nodeNames'] = nodeNames;
    }
    public withNodeNames(nodeNames: Array<string>): BatchDrainPoolNodesReq {
        this['nodeNames'] = nodeNames;
        return this;
    }
}