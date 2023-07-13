

export class MetadataDeleteReq {
    public taskIds?: Array<string>;
    public constructor() { 
    }
    public withTaskIds(taskIds: Array<string>): MetadataDeleteReq {
        this['taskIds'] = taskIds;
        return this;
    }
}