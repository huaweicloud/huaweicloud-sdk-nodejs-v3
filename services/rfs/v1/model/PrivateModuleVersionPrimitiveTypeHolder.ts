

export class PrivateModuleVersionPrimitiveTypeHolder {
    private 'module_version'?: string;
    public constructor() { 
    }
    public withModuleVersion(moduleVersion: string): PrivateModuleVersionPrimitiveTypeHolder {
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