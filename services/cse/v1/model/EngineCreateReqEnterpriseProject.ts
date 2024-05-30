

export class EngineCreateReqEnterpriseProject {
    public id?: string;
    public name?: string;
    public description?: string;
    public status?: number;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public label?: string;
    public constructor() { 
    }
    public withId(id: string): EngineCreateReqEnterpriseProject {
        this['id'] = id;
        return this;
    }
    public withName(name: string): EngineCreateReqEnterpriseProject {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): EngineCreateReqEnterpriseProject {
        this['description'] = description;
        return this;
    }
    public withStatus(status: number): EngineCreateReqEnterpriseProject {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: string): EngineCreateReqEnterpriseProject {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): EngineCreateReqEnterpriseProject {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withLabel(label: string): EngineCreateReqEnterpriseProject {
        this['label'] = label;
        return this;
    }
}