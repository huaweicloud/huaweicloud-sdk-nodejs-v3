

export class RetainAllResourcesTypeHolder {
    private 'retain_all_resources'?: boolean;
    public constructor() { 
    }
    public withRetainAllResources(retainAllResources: boolean): RetainAllResourcesTypeHolder {
        this['retain_all_resources'] = retainAllResources;
        return this;
    }
    public set retainAllResources(retainAllResources: boolean  | undefined) {
        this['retain_all_resources'] = retainAllResources;
    }
    public get retainAllResources(): boolean | undefined {
        return this['retain_all_resources'];
    }
}