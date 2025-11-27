import { PrivateModuleCreateTimePrimitiveTypeHolder } from './PrivateModuleCreateTimePrimitiveTypeHolder';
import { PrivateModuleDescriptionPrimitiveTypeHolder } from './PrivateModuleDescriptionPrimitiveTypeHolder';
import { PrivateModuleIdPrimitiveTypeHolder } from './PrivateModuleIdPrimitiveTypeHolder';
import { PrivateModuleNamePrimitiveTypeHolder } from './PrivateModuleNamePrimitiveTypeHolder';
import { PrivateModuleUpdateTimePrimitiveTypeHolder } from './PrivateModuleUpdateTimePrimitiveTypeHolder';


export class PrivateModuleSummary {
    private 'module_name'?: string;
    private 'module_id'?: string;
    private 'module_description'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor(moduleName?: string) { 
        this['module_name'] = moduleName;
    }
    public withModuleName(moduleName: string): PrivateModuleSummary {
        this['module_name'] = moduleName;
        return this;
    }
    public set moduleName(moduleName: string  | undefined) {
        this['module_name'] = moduleName;
    }
    public get moduleName(): string | undefined {
        return this['module_name'];
    }
    public withModuleId(moduleId: string): PrivateModuleSummary {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
    public withModuleDescription(moduleDescription: string): PrivateModuleSummary {
        this['module_description'] = moduleDescription;
        return this;
    }
    public set moduleDescription(moduleDescription: string  | undefined) {
        this['module_description'] = moduleDescription;
    }
    public get moduleDescription(): string | undefined {
        return this['module_description'];
    }
    public withCreateTime(createTime: string): PrivateModuleSummary {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): PrivateModuleSummary {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}