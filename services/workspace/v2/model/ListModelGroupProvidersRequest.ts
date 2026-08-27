

export class ListModelGroupProvidersRequest {
    private 'group_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(groupId?: string) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: string): ListModelGroupProvidersRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withOffset(offset: number): ListModelGroupProvidersRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListModelGroupProvidersRequest {
        this['limit'] = limit;
        return this;
    }
}