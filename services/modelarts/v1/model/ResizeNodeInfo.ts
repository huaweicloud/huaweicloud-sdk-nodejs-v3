

export class ResizeNodeInfo {
    public batchUID?: string;
    public deleteNodeNames?: Array<string>;
    public constructor() { 
    }
    public withBatchUID(batchUID: string): ResizeNodeInfo {
        this['batchUID'] = batchUID;
        return this;
    }
    public withDeleteNodeNames(deleteNodeNames: Array<string>): ResizeNodeInfo {
        this['deleteNodeNames'] = deleteNodeNames;
        return this;
    }
}