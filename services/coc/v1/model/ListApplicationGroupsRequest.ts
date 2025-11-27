

export class ListApplicationGroupsRequest {
    private 'id_list'?: Array<string>;
    private 'component_id'?: string;
    private 'application_id'?: string;
    private 'name_like'?: string;
    public code?: string;
    public marker?: string;
    public limit?: number;
    public constructor(limit?: number) { 
        this['limit'] = limit;
    }
    public withIdList(idList: Array<string>): ListApplicationGroupsRequest {
        this['id_list'] = idList;
        return this;
    }
    public set idList(idList: Array<string>  | undefined) {
        this['id_list'] = idList;
    }
    public get idList(): Array<string> | undefined {
        return this['id_list'];
    }
    public withComponentId(componentId: string): ListApplicationGroupsRequest {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withApplicationId(applicationId: string): ListApplicationGroupsRequest {
        this['application_id'] = applicationId;
        return this;
    }
    public set applicationId(applicationId: string  | undefined) {
        this['application_id'] = applicationId;
    }
    public get applicationId(): string | undefined {
        return this['application_id'];
    }
    public withNameLike(nameLike: string): ListApplicationGroupsRequest {
        this['name_like'] = nameLike;
        return this;
    }
    public set nameLike(nameLike: string  | undefined) {
        this['name_like'] = nameLike;
    }
    public get nameLike(): string | undefined {
        return this['name_like'];
    }
    public withCode(code: string): ListApplicationGroupsRequest {
        this['code'] = code;
        return this;
    }
    public withMarker(marker: string): ListApplicationGroupsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListApplicationGroupsRequest {
        this['limit'] = limit;
        return this;
    }
}