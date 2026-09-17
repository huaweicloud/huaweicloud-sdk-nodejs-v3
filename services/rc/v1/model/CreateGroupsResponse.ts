

export class CreateGroupsResponse {
    private 'group_id'?: string;
    private 'domain_id'?: string;
    private 'group_name'?: string;
    public description?: string;
    public created?: string;
    public updated?: string;
    public constructor() { 
    }
    public withGroupId(groupId: string): CreateGroupsResponse {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withDomainId(domainId: string): CreateGroupsResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withGroupName(groupName: string): CreateGroupsResponse {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withDescription(description: string): CreateGroupsResponse {
        this['description'] = description;
        return this;
    }
    public withCreated(created: string): CreateGroupsResponse {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): CreateGroupsResponse {
        this['updated'] = updated;
        return this;
    }
}