

export class OrgGroupDTO {
    public groupId?: string;
    public groupName?: string;
    public constructor() { 
    }
    public withGroupId(groupId: string): OrgGroupDTO {
        this['groupId'] = groupId;
        return this;
    }
    public withGroupName(groupName: string): OrgGroupDTO {
        this['groupName'] = groupName;
        return this;
    }
}