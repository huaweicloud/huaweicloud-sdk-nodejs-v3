

export class QueryCorpGroupDTO {
    public groupId?: string;
    public groupName?: string;
    public groupType?: number;
    public remarks?: string;
    public regionId?: string;
    public status?: number;
    public constructor() { 
    }
    public withGroupId(groupId: string): QueryCorpGroupDTO {
        this['groupId'] = groupId;
        return this;
    }
    public withGroupName(groupName: string): QueryCorpGroupDTO {
        this['groupName'] = groupName;
        return this;
    }
    public withGroupType(groupType: number): QueryCorpGroupDTO {
        this['groupType'] = groupType;
        return this;
    }
    public withRemarks(remarks: string): QueryCorpGroupDTO {
        this['remarks'] = remarks;
        return this;
    }
    public withRegionId(regionId: string): QueryCorpGroupDTO {
        this['regionId'] = regionId;
        return this;
    }
    public withStatus(status: number): QueryCorpGroupDTO {
        this['status'] = status;
        return this;
    }
}