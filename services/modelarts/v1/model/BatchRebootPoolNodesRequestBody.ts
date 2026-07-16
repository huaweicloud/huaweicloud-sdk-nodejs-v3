

export class BatchRebootPoolNodesRequestBody {
    public nodeNames?: Array<string>;
    public constructor(nodeNames?: Array<string>) { 
        this['nodeNames'] = nodeNames;
    }
    public withNodeNames(nodeNames: Array<string>): BatchRebootPoolNodesRequestBody {
        this['nodeNames'] = nodeNames;
        return this;
    }
}