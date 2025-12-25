

export class BatchCreateDataobjectRelationsRequestBody {
    private 'dataobject_ids'?: Array<string>;
    private 'related_dataobject_ids'?: Array<string>;
    public constructor() { 
    }
    public withDataobjectIds(dataobjectIds: Array<string>): BatchCreateDataobjectRelationsRequestBody {
        this['dataobject_ids'] = dataobjectIds;
        return this;
    }
    public set dataobjectIds(dataobjectIds: Array<string>  | undefined) {
        this['dataobject_ids'] = dataobjectIds;
    }
    public get dataobjectIds(): Array<string> | undefined {
        return this['dataobject_ids'];
    }
    public withRelatedDataobjectIds(relatedDataobjectIds: Array<string>): BatchCreateDataobjectRelationsRequestBody {
        this['related_dataobject_ids'] = relatedDataobjectIds;
        return this;
    }
    public set relatedDataobjectIds(relatedDataobjectIds: Array<string>  | undefined) {
        this['related_dataobject_ids'] = relatedDataobjectIds;
    }
    public get relatedDataobjectIds(): Array<string> | undefined {
        return this['related_dataobject_ids'];
    }
}