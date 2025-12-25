

export class CreateAssetsRequestBody {
    public name?: string;
    public description?: string;
    private 'component_id'?: string;
    private 'component_version_id'?: string;
    public config?: string;
    public constructor(name?: string, componentId?: string, componentVersionId?: string, config?: string) { 
        this['name'] = name;
        this['component_id'] = componentId;
        this['component_version_id'] = componentVersionId;
        this['config'] = config;
    }
    public withName(name: string): CreateAssetsRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateAssetsRequestBody {
        this['description'] = description;
        return this;
    }
    public withComponentId(componentId: string): CreateAssetsRequestBody {
        this['component_id'] = componentId;
        return this;
    }
    public set componentId(componentId: string  | undefined) {
        this['component_id'] = componentId;
    }
    public get componentId(): string | undefined {
        return this['component_id'];
    }
    public withComponentVersionId(componentVersionId: string): CreateAssetsRequestBody {
        this['component_version_id'] = componentVersionId;
        return this;
    }
    public set componentVersionId(componentVersionId: string  | undefined) {
        this['component_version_id'] = componentVersionId;
    }
    public get componentVersionId(): string | undefined {
        return this['component_version_id'];
    }
    public withConfig(config: string): CreateAssetsRequestBody {
        this['config'] = config;
        return this;
    }
}