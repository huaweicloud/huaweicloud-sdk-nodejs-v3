import { ConnectionModuleFieldUpdateVo } from './ConnectionModuleFieldUpdateVo';


export class UpdateConnectionDto {
    public description?: string;
    public fields?: Array<ConnectionModuleFieldUpdateVo>;
    private 'module_id'?: string;
    public name?: string;
    private 'template_id'?: string;
    public title?: string;
    public constructor(moduleId?: string, name?: string, templateId?: string, title?: string) { 
        this['module_id'] = moduleId;
        this['name'] = name;
        this['template_id'] = templateId;
        this['title'] = title;
    }
    public withDescription(description: string): UpdateConnectionDto {
        this['description'] = description;
        return this;
    }
    public withFields(fields: Array<ConnectionModuleFieldUpdateVo>): UpdateConnectionDto {
        this['fields'] = fields;
        return this;
    }
    public withModuleId(moduleId: string): UpdateConnectionDto {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
    public withName(name: string): UpdateConnectionDto {
        this['name'] = name;
        return this;
    }
    public withTemplateId(templateId: string): UpdateConnectionDto {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withTitle(title: string): UpdateConnectionDto {
        this['title'] = title;
        return this;
    }
}