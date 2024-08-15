

export class ListApplicationsRequest {
    private 'id_list'?: Array<string>;
    private 'parent_id'?: string;
    private 'name_like'?: string;
    public code?: string;
    public marker?: string;
    public limit?: number;
    public constructor(limit?: number) { 
        this['limit'] = limit;
    }
    public withIdList(idList: Array<string>): ListApplicationsRequest {
        this['id_list'] = idList;
        return this;
    }
    public set idList(idList: Array<string>  | undefined) {
        this['id_list'] = idList;
    }
    public get idList(): Array<string> | undefined {
        return this['id_list'];
    }
    public withParentId(parentId: string): ListApplicationsRequest {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withNameLike(nameLike: string): ListApplicationsRequest {
        this['name_like'] = nameLike;
        return this;
    }
    public set nameLike(nameLike: string  | undefined) {
        this['name_like'] = nameLike;
    }
    public get nameLike(): string | undefined {
        return this['name_like'];
    }
    public withCode(code: string): ListApplicationsRequest {
        this['code'] = code;
        return this;
    }
    public withMarker(marker: string): ListApplicationsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListApplicationsRequest {
        this['limit'] = limit;
        return this;
    }
}