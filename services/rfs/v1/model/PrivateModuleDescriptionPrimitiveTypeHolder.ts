

export class PrivateModuleDescriptionPrimitiveTypeHolder {
    private 'module_description'?: string;
    public constructor() { 
    }
    public withModuleDescription(moduleDescription: string): PrivateModuleDescriptionPrimitiveTypeHolder {
        this['module_description'] = moduleDescription;
        return this;
    }
    public set moduleDescription(moduleDescription: string  | undefined) {
        this['module_description'] = moduleDescription;
    }
    public get moduleDescription(): string | undefined {
        return this['module_description'];
    }
}