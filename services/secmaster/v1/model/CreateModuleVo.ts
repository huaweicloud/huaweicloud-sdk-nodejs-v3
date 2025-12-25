import { ModuleFieldVo } from './ModuleFieldVo';


export class CreateModuleVo {
    public children?: Array<CreateModuleVo>;
    private 'connection_module_id'?: string;
    public fields?: Array<ModuleFieldVo>;
    public name?: string;
    private 'template_id'?: string;
    public constructor() { 
    }
    public withChildren(children: Array<CreateModuleVo>): CreateModuleVo {
        this['children'] = children;
        return this;
    }
    public withConnectionModuleId(connectionModuleId: string): CreateModuleVo {
        this['connection_module_id'] = connectionModuleId;
        return this;
    }
    public set connectionModuleId(connectionModuleId: string  | undefined) {
        this['connection_module_id'] = connectionModuleId;
    }
    public get connectionModuleId(): string | undefined {
        return this['connection_module_id'];
    }
    public withFields(fields: Array<ModuleFieldVo>): CreateModuleVo {
        this['fields'] = fields;
        return this;
    }
    public withName(name: string): CreateModuleVo {
        this['name'] = name;
        return this;
    }
    public withTemplateId(templateId: string): CreateModuleVo {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
}