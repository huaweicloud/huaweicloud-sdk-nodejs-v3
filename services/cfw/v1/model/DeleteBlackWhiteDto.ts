

export class DeleteBlackWhiteDto {
    private 'list_ids'?: Array<string>;
    private 'list_type'?: number;
    private 'object_id'?: string;
    public constructor(listIds?: Array<string>, listType?: number, objectId?: string) { 
        this['list_ids'] = listIds;
        this['list_type'] = listType;
        this['object_id'] = objectId;
    }
    public withListIds(listIds: Array<string>): DeleteBlackWhiteDto {
        this['list_ids'] = listIds;
        return this;
    }
    public set listIds(listIds: Array<string>  | undefined) {
        this['list_ids'] = listIds;
    }
    public get listIds(): Array<string> | undefined {
        return this['list_ids'];
    }
    public withListType(listType: number): DeleteBlackWhiteDto {
        this['list_type'] = listType;
        return this;
    }
    public set listType(listType: number  | undefined) {
        this['list_type'] = listType;
    }
    public get listType(): number | undefined {
        return this['list_type'];
    }
    public withObjectId(objectId: string): DeleteBlackWhiteDto {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
}