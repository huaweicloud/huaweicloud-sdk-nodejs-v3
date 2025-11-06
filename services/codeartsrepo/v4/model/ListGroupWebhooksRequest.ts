

export class ListGroupWebhooksRequest {
    private 'group_id'?: number;
    public offset?: number;
    public limit?: number;
    public constructor(groupId?: number) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: number): ListGroupWebhooksRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
    public withOffset(offset: number): ListGroupWebhooksRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListGroupWebhooksRequest {
        this['limit'] = limit;
        return this;
    }
}