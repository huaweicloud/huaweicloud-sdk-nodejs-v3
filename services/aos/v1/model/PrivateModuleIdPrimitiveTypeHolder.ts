

export class PrivateModuleIdPrimitiveTypeHolder {
    private 'module_id'?: string;
    public constructor() { 
    }
    public withModuleId(moduleId: string): PrivateModuleIdPrimitiveTypeHolder {
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