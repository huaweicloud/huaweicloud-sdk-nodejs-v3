import { UserRequest } from './UserRequest';


export class UpdateProjectModuleRequestBody {
    public description?: string;
    private 'module_name'?: string;
    public owner?: UserRequest;
    public constructor(moduleName?: string, owner?: UserRequest) { 
        this['module_name'] = moduleName;
        this['owner'] = owner;
    }
    public withDescription(description: string): UpdateProjectModuleRequestBody {
        this['description'] = description;
        return this;
    }
    public withModuleName(moduleName: string): UpdateProjectModuleRequestBody {
        this['module_name'] = moduleName;
        return this;
    }
    public set moduleName(moduleName: string  | undefined) {
        this['module_name'] = moduleName;
    }
    public get moduleName(): string | undefined {
        return this['module_name'];
    }
    public withOwner(owner: UserRequest): UpdateProjectModuleRequestBody {
        this['owner'] = owner;
        return this;
    }
}