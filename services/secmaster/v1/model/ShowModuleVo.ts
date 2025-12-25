import { CreateModuleVo } from './CreateModuleVo';
import { ModuleFieldVo } from './ModuleFieldVo';


export class ShowModuleVo {
    public children?: Array<CreateModuleVo>;
    private 'connection_module_id'?: string;
    public fields?: Array<ModuleFieldVo>;
    public name?: string;
    private 'template_id'?: string;
    private 'module_id'?: string;
    public constructor() { 
    }
    public withChildren(children: Array<CreateModuleVo>): ShowModuleVo {
        this['children'] = children;
        return this;
    }
    public withConnectionModuleId(connectionModuleId: string): ShowModuleVo {
        this['connection_module_id'] = connectionModuleId;
        return this;
    }
    public set connectionModuleId(connectionModuleId: string  | undefined) {
        this['connection_module_id'] = connectionModuleId;
    }
    public get connectionModuleId(): string | undefined {
        return this['connection_module_id'];
    }
    public withFields(fields: Array<ModuleFieldVo>): ShowModuleVo {
        this['fields'] = fields;
        return this;
    }
    public withName(name: string): ShowModuleVo {
        this['name'] = name;
        return this;
    }
    public withTemplateId(templateId: string): ShowModuleVo {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withModuleId(moduleId: string): ShowModuleVo {
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