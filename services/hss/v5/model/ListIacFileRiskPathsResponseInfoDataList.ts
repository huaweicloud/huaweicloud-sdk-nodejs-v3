

export class ListIacFileRiskPathsResponseInfoDataList {
    private 'resource_name'?: string;
    private 'resource_type'?: string;
    public namespace?: string;
    private 'hit_rule'?: string;
    private 'hit_path'?: string;
    public constructor() { 
    }
    public withResourceName(resourceName: string): ListIacFileRiskPathsResponseInfoDataList {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withResourceType(resourceType: string): ListIacFileRiskPathsResponseInfoDataList {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withNamespace(namespace: string): ListIacFileRiskPathsResponseInfoDataList {
        this['namespace'] = namespace;
        return this;
    }
    public withHitRule(hitRule: string): ListIacFileRiskPathsResponseInfoDataList {
        this['hit_rule'] = hitRule;
        return this;
    }
    public set hitRule(hitRule: string  | undefined) {
        this['hit_rule'] = hitRule;
    }
    public get hitRule(): string | undefined {
        return this['hit_rule'];
    }
    public withHitPath(hitPath: string): ListIacFileRiskPathsResponseInfoDataList {
        this['hit_path'] = hitPath;
        return this;
    }
    public set hitPath(hitPath: string  | undefined) {
        this['hit_path'] = hitPath;
    }
    public get hitPath(): string | undefined {
        return this['hit_path'];
    }
}