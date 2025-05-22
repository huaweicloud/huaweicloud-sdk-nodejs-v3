import { UserRequest } from './UserRequest';


export class CreateProjectModuleRequestBody {
    public description?: string;
    private 'module_name'?: string;
    private 'parent_module_id'?: number;
    public owner?: UserRequest;
    public constructor(moduleName?: string, owner?: UserRequest) { 
        this['module_name'] = moduleName;
        this['owner'] = owner;
    }
    public withDescription(description: string): CreateProjectModuleRequestBody {
        this['description'] = description;
        return this;
    }
    public withModuleName(moduleName: string): CreateProjectModuleRequestBody {
        this['module_name'] = moduleName;
        return this;
    }
    public set moduleName(moduleName: string  | undefined) {
        this['module_name'] = moduleName;
    }
    public get moduleName(): string | undefined {
        return this['module_name'];
    }
    public withParentModuleId(parentModuleId: number): CreateProjectModuleRequestBody {
        this['parent_module_id'] = parentModuleId;
        return this;
    }
    public set parentModuleId(parentModuleId: number  | undefined) {
        this['parent_module_id'] = parentModuleId;
    }
    public get parentModuleId(): number | undefined {
        return this['parent_module_id'];
    }
    public withOwner(owner: UserRequest): CreateProjectModuleRequestBody {
        this['owner'] = owner;
        return this;
    }
}