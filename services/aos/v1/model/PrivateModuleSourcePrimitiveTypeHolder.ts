

export class PrivateModuleSourcePrimitiveTypeHolder {
    private 'module_source'?: string;
    public constructor() { 
    }
    public withModuleSource(moduleSource: string): PrivateModuleSourcePrimitiveTypeHolder {
        this['module_source'] = moduleSource;
        return this;
    }
    public set moduleSource(moduleSource: string  | undefined) {
        this['module_source'] = moduleSource;
    }
    public get moduleSource(): string | undefined {
        return this['module_source'];
    }
}