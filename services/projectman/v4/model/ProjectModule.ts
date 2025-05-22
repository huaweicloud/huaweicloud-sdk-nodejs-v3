import { ModuleOwner } from './ModuleOwner';
import { ProjectChildModule } from './ProjectChildModule';


export class ProjectModule {
    private 'module_id'?: number;
    private 'module_name'?: string;
    public owner?: ModuleOwner;
    public deepth?: number;
    private 'is_parent'?: boolean;
    public children?: Array<ProjectChildModule>;
    public constructor() { 
    }
    public withModuleId(moduleId: number): ProjectModule {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: number  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): number | undefined {
        return this['module_id'];
    }
    public withModuleName(moduleName: string): ProjectModule {
        this['module_name'] = moduleName;
        return this;
    }
    public set moduleName(moduleName: string  | undefined) {
        this['module_name'] = moduleName;
    }
    public get moduleName(): string | undefined {
        return this['module_name'];
    }
    public withOwner(owner: ModuleOwner): ProjectModule {
        this['owner'] = owner;
        return this;
    }
    public withDeepth(deepth: number): ProjectModule {
        this['deepth'] = deepth;
        return this;
    }
    public withIsParent(isParent: boolean): ProjectModule {
        this['is_parent'] = isParent;
        return this;
    }
    public set isParent(isParent: boolean  | undefined) {
        this['is_parent'] = isParent;
    }
    public get isParent(): boolean | undefined {
        return this['is_parent'];
    }
    public withChildren(children: Array<ProjectChildModule>): ProjectModule {
        this['children'] = children;
        return this;
    }
}