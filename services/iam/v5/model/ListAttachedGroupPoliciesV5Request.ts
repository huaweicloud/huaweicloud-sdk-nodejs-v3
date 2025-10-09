

export class ListAttachedGroupPoliciesV5Request {
    private 'group_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor(groupId?: string) { 
        this['group_id'] = groupId;
    }
    public withGroupId(groupId: string): ListAttachedGroupPoliciesV5Request {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withLimit(limit: number): ListAttachedGroupPoliciesV5Request {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListAttachedGroupPoliciesV5Request {
        this['marker'] = marker;
        return this;
    }
}