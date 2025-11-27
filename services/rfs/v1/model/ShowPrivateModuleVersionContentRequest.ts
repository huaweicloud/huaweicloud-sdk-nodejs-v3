

export class ShowPrivateModuleVersionContentRequest {
    private 'Client-Request-Id'?: string;
    private 'module_name'?: string;
    private 'module_version'?: string;
    private 'module_id'?: string;
    public constructor(clientRequestId?: string, moduleName?: string, moduleVersion?: string) { 
        this['Client-Request-Id'] = clientRequestId;
        this['module_name'] = moduleName;
        this['module_version'] = moduleVersion;
    }
    public withClientRequestId(clientRequestId: string): ShowPrivateModuleVersionContentRequest {
        this['Client-Request-Id'] = clientRequestId;
        return this;
    }
    public set clientRequestId(clientRequestId: string  | undefined) {
        this['Client-Request-Id'] = clientRequestId;
    }
    public get clientRequestId(): string | undefined {
        return this['Client-Request-Id'];
    }
    public withModuleName(moduleName: string): ShowPrivateModuleVersionContentRequest {
        this['module_name'] = moduleName;
        return this;
    }
    public set moduleName(moduleName: string  | undefined) {
        this['module_name'] = moduleName;
    }
    public get moduleName(): string | undefined {
        return this['module_name'];
    }
    public withModuleVersion(moduleVersion: string): ShowPrivateModuleVersionContentRequest {
        this['module_version'] = moduleVersion;
        return this;
    }
    public set moduleVersion(moduleVersion: string  | undefined) {
        this['module_version'] = moduleVersion;
    }
    public get moduleVersion(): string | undefined {
        return this['module_version'];
    }
    public withModuleId(moduleId: string): ShowPrivateModuleVersionContentRequest {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
}