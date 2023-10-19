

export class EnterpriseProjectItem {
    public id?: string;
    public name?: string;
    public description?: string;
    public status?: string;
    public created?: string;
    public updated?: string;
    public constructor() { 
    }
    public withId(id: string): EnterpriseProjectItem {
        this['id'] = id;
        return this;
    }
    public withName(name: string): EnterpriseProjectItem {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): EnterpriseProjectItem {
        this['description'] = description;
        return this;
    }
    public withStatus(status: string): EnterpriseProjectItem {
        this['status'] = status;
        return this;
    }
    public withCreated(created: string): EnterpriseProjectItem {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): EnterpriseProjectItem {
        this['updated'] = updated;
        return this;
    }
}