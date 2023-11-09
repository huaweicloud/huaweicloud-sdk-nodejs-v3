

export class ModifyPlaybookInfo {
    public name?: string;
    public description?: string;
    public enabled?: boolean;
    private 'active_version_id'?: string;
    public constructor() { 
    }
    public withName(name: string): ModifyPlaybookInfo {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ModifyPlaybookInfo {
        this['description'] = description;
        return this;
    }
    public withEnabled(enabled: boolean): ModifyPlaybookInfo {
        this['enabled'] = enabled;
        return this;
    }
    public withActiveVersionId(activeVersionId: string): ModifyPlaybookInfo {
        this['active_version_id'] = activeVersionId;
        return this;
    }
    public set activeVersionId(activeVersionId: string  | undefined) {
        this['active_version_id'] = activeVersionId;
    }
    public get activeVersionId(): string | undefined {
        return this['active_version_id'];
    }
}