import { ModuleOwner } from './ModuleOwner';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateProjectModuleResponse extends SdkResponse {
    public description?: string;
    private 'module_name'?: string;
    private 'module_id'?: number;
    public owner?: ModuleOwner;
    public constructor() { 
        super();
    }
    public withDescription(description: string): CreateProjectModuleResponse {
        this['description'] = description;
        return this;
    }
    public withModuleName(moduleName: string): CreateProjectModuleResponse {
        this['module_name'] = moduleName;
        return this;
    }
    public set moduleName(moduleName: string  | undefined) {
        this['module_name'] = moduleName;
    }
    public get moduleName(): string | undefined {
        return this['module_name'];
    }
    public withModuleId(moduleId: number): CreateProjectModuleResponse {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: number  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): number | undefined {
        return this['module_id'];
    }
    public withOwner(owner: ModuleOwner): CreateProjectModuleResponse {
        this['owner'] = owner;
        return this;
    }
}