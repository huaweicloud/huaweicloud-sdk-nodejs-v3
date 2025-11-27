

export class ModuleURIRequiredPrimitiveTypeHolder {
    private 'module_uri'?: string;
    public constructor(moduleUri?: string) { 
        this['module_uri'] = moduleUri;
    }
    public withModuleUri(moduleUri: string): ModuleURIRequiredPrimitiveTypeHolder {
        this['module_uri'] = moduleUri;
        return this;
    }
    public set moduleUri(moduleUri: string  | undefined) {
        this['module_uri'] = moduleUri;
    }
    public get moduleUri(): string | undefined {
        return this['module_uri'];
    }
}