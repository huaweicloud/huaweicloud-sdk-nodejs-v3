

export class DomainVO {
    public id?: string;
    public name?: string;
    public title?: string;
    private 'project_id'?: string;
    private 'parent_id'?: string;
    public category?: string;
    private 'created_by'?: string;
    private 'model_id'?: string;
    public constructor() { 
    }
    public withId(id: string): DomainVO {
        this['id'] = id;
        return this;
    }
    public withName(name: string): DomainVO {
        this['name'] = name;
        return this;
    }
    public withTitle(title: string): DomainVO {
        this['title'] = title;
        return this;
    }
    public withProjectId(projectId: string): DomainVO {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withParentId(parentId: string): DomainVO {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withCategory(category: string): DomainVO {
        this['category'] = category;
        return this;
    }
    public withCreatedBy(createdBy: string): DomainVO {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withModelId(modelId: string): DomainVO {
        this['model_id'] = modelId;
        return this;
    }
    public set modelId(modelId: string  | undefined) {
        this['model_id'] = modelId;
    }
    public get modelId(): string | undefined {
        return this['model_id'];
    }
}