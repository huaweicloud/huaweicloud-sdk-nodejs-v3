import { ModuleOwner } from './ModuleOwner';


export class ProjectChildModule {
    private 'module_id'?: number;
    private 'module_name'?: string;
    public owner?: ModuleOwner;
    public deepth?: number;
    private 'is_parent'?: boolean;
    private 'parent_module_id'?: number;
    public constructor() { 
    }
    public withModuleId(moduleId: number): ProjectChildModule {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: number  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): number | undefined {
        return this['module_id'];
    }
    public withModuleName(moduleName: string): ProjectChildModule {
        this['module_name'] = moduleName;
        return this;
    }
    public set moduleName(moduleName: string  | undefined) {
        this['module_name'] = moduleName;
    }
    public get moduleName(): string | undefined {
        return this['module_name'];
    }
    public withOwner(owner: ModuleOwner): ProjectChildModule {
        this['owner'] = owner;
        return this;
    }
    public withDeepth(deepth: number): ProjectChildModule {
        this['deepth'] = deepth;
        return this;
    }
    public withIsParent(isParent: boolean): ProjectChildModule {
        this['is_parent'] = isParent;
        return this;
    }
    public set isParent(isParent: boolean  | undefined) {
        this['is_parent'] = isParent;
    }
    public get isParent(): boolean | undefined {
        return this['is_parent'];
    }
    public withParentModuleId(parentModuleId: number): ProjectChildModule {
        this['parent_module_id'] = parentModuleId;
        return this;
    }
    public set parentModuleId(parentModuleId: number  | undefined) {
        this['parent_module_id'] = parentModuleId;
    }
    public get parentModuleId(): number | undefined {
        return this['parent_module_id'];
    }
}