

export class ListQueryAllSearchCriteriasRequest {
    private 'group_id': string | undefined;
    private 'Content-Type'?: string | undefined;
    public constructor(groupId?: any) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: string): ListQueryAllSearchCriteriasRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId() {
        return this['group_id'];
    }
    public withContentType(contentType: string): ListQueryAllSearchCriteriasRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
}