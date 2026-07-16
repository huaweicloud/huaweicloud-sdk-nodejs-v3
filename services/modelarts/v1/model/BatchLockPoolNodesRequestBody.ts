

export class BatchLockPoolNodesRequestBody {
    public nodeNames?: Array<string>;
    public actions?: Array<string>;
    public constructor(nodeNames?: Array<string>, actions?: Array<string>) { 
        this['nodeNames'] = nodeNames;
        this['actions'] = actions;
    }
    public withNodeNames(nodeNames: Array<string>): BatchLockPoolNodesRequestBody {
        this['nodeNames'] = nodeNames;
        return this;
    }
    public withActions(actions: Array<string>): BatchLockPoolNodesRequestBody {
        this['actions'] = actions;
        return this;
    }
}