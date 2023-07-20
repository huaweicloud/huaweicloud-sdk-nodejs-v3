

export class EnterpriseProject {
    public id?: string;
    public name?: string;
    public description?: string;
    public status?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public constructor() { 
    }
    public withId(id: string): EnterpriseProject {
        this['id'] = id;
        return this;
    }
    public withName(name: string): EnterpriseProject {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): EnterpriseProject {
        this['description'] = description;
        return this;
    }
    public withStatus(status: string): EnterpriseProject {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: string): EnterpriseProject {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): EnterpriseProject {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
}