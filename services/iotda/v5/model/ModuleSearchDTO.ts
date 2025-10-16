

export class ModuleSearchDTO {
    private 'module_name'?: string;
    private 'module_version'?: string;
    public constructor(moduleName?: string, moduleVersion?: string) { 
        this['module_name'] = moduleName;
        this['module_version'] = moduleVersion;
    }
    public withModuleName(moduleName: string): ModuleSearchDTO {
        this['module_name'] = moduleName;
        return this;
    }
    public set moduleName(moduleName: string  | undefined) {
        this['module_name'] = moduleName;
    }
    public get moduleName(): string | undefined {
        return this['module_name'];
    }
    public withModuleVersion(moduleVersion: string): ModuleSearchDTO {
        this['module_version'] = moduleVersion;
        return this;
    }
    public set moduleVersion(moduleVersion: string  | undefined) {
        this['module_version'] = moduleVersion;
    }
    public get moduleVersion(): string | undefined {
        return this['module_version'];
    }
}