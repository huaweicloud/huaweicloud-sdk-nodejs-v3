

export class BatchDeleteDomainSetsDto {
    private 'object_id'?: string;
    private 'set_ids'?: Array<string>;
    public constructor() { 
    }
    public withObjectId(objectId: string): BatchDeleteDomainSetsDto {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withSetIds(setIds: Array<string>): BatchDeleteDomainSetsDto {
        this['set_ids'] = setIds;
        return this;
    }
    public set setIds(setIds: Array<string>  | undefined) {
        this['set_ids'] = setIds;
    }
    public get setIds(): Array<string> | undefined {
        return this['set_ids'];
    }
}