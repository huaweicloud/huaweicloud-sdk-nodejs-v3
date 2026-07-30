

export class ListAiPolicyGroupsRequest {
    private 'group_id'?: string;
    private 'group_name'?: string;
    private 'protection_object'?: string;
    private 'object_type'?: number;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withGroupId(groupId: string): ListAiPolicyGroupsRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): ListAiPolicyGroupsRequest {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withProtectionObject(protectionObject: string): ListAiPolicyGroupsRequest {
        this['protection_object'] = protectionObject;
        return this;
    }
    public set protectionObject(protectionObject: string  | undefined) {
        this['protection_object'] = protectionObject;
    }
    public get protectionObject(): string | undefined {
        return this['protection_object'];
    }
    public withObjectType(objectType: number): ListAiPolicyGroupsRequest {
        this['object_type'] = objectType;
        return this;
    }
    public set objectType(objectType: number  | undefined) {
        this['object_type'] = objectType;
    }
    public get objectType(): number | undefined {
        return this['object_type'];
    }
    public withOffset(offset: number): ListAiPolicyGroupsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListAiPolicyGroupsRequest {
        this['limit'] = limit;
        return this;
    }
}