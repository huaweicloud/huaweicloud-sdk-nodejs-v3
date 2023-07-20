

export class ListGroupsForEnterpriseProjectResDetail {
    public createTime?: number;
    public description?: string;
    public domainId?: string;
    public id?: string;
    public name?: string;
    public constructor(createTime?: number, description?: string, domainId?: string, id?: string, name?: string) { 
        this['createTime'] = createTime;
        this['description'] = description;
        this['domainId'] = domainId;
        this['id'] = id;
        this['name'] = name;
    }
    public withCreateTime(createTime: number): ListGroupsForEnterpriseProjectResDetail {
        this['createTime'] = createTime;
        return this;
    }
    public withDescription(description: string): ListGroupsForEnterpriseProjectResDetail {
        this['description'] = description;
        return this;
    }
    public withDomainId(domainId: string): ListGroupsForEnterpriseProjectResDetail {
        this['domainId'] = domainId;
        return this;
    }
    public withId(id: string): ListGroupsForEnterpriseProjectResDetail {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListGroupsForEnterpriseProjectResDetail {
        this['name'] = name;
        return this;
    }
}