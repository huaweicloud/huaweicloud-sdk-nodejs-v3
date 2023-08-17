

export class MetadataDeleteReq {
    public taskIds?: Array<string>;
    public constructor(taskIds?: Array<string>) { 
        this['taskIds'] = taskIds;
    }
    public withTaskIds(taskIds: Array<string>): MetadataDeleteReq {
        this['taskIds'] = taskIds;
        return this;
    }
}