

export class PrivateModuleVersionRequiredPrimitiveTypeHolder {
    private 'module_version'?: string;
    public constructor(moduleVersion?: string) { 
        this['module_version'] = moduleVersion;
    }
    public withModuleVersion(moduleVersion: string): PrivateModuleVersionRequiredPrimitiveTypeHolder {
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