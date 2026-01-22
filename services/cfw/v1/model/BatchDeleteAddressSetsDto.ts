

export class BatchDeleteAddressSetsDto {
    private 'object_id'?: string;
    private 'set_ids'?: Array<string>;
    public constructor(objectId?: string, setIds?: Array<string>) { 
        this['object_id'] = objectId;
        this['set_ids'] = setIds;
    }
    public withObjectId(objectId: string): BatchDeleteAddressSetsDto {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withSetIds(setIds: Array<string>): BatchDeleteAddressSetsDto {
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