

export class PrivateModuleNamePrimitiveTypeHolder {
    private 'module_name'?: string;
    public constructor(moduleName?: string) { 
        this['module_name'] = moduleName;
    }
    public withModuleName(moduleName: string): PrivateModuleNamePrimitiveTypeHolder {
        this['module_name'] = moduleName;
        return this;
    }
    public set moduleName(moduleName: string  | undefined) {
        this['module_name'] = moduleName;
    }
    public get moduleName(): string | undefined {
        return this['module_name'];
    }
}