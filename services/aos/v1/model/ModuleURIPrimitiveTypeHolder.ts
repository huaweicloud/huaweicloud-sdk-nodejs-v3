

export class ModuleURIPrimitiveTypeHolder {
    private 'module_uri'?: string;
    public constructor() { 
    }
    public withModuleUri(moduleUri: string): ModuleURIPrimitiveTypeHolder {
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