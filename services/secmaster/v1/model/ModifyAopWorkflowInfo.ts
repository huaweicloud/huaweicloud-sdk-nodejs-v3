

export class ModifyAopWorkflowInfo {
    public name?: string;
    public description?: string;
    public enabled?: boolean;
    private 'version_id'?: string;
    public labels?: string;
    public constructor() { 
    }
    public withName(name: string): ModifyAopWorkflowInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ModifyAopWorkflowInfo {
        this['description'] = description;
        return this;
    }
    public withEnabled(enabled: boolean): ModifyAopWorkflowInfo {
        this['enabled'] = enabled;
        return this;
    }
    public withVersionId(versionId: string): ModifyAopWorkflowInfo {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
    public withLabels(labels: string): ModifyAopWorkflowInfo {
        this['labels'] = labels;
        return this;
    }
}