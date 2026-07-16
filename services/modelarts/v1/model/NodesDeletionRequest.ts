

export class NodesDeletionRequest {
    public deleteNodeNames?: Array<string>;
    public constructor(deleteNodeNames?: Array<string>) { 
        this['deleteNodeNames'] = deleteNodeNames;
    }
    public withDeleteNodeNames(deleteNodeNames: Array<string>): NodesDeletionRequest {
        this['deleteNodeNames'] = deleteNodeNames;
        return this;
    }
}