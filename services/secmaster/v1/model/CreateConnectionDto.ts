import { ConnectionModuleFieldCreateVo } from './ConnectionModuleFieldCreateVo';


export class CreateConnectionDto {
    public description?: string;
    public fields?: Array<ConnectionModuleFieldCreateVo>;
    public name?: string;
    private 'template_id'?: string;
    public title?: string;
    public constructor(fields?: Array<ConnectionModuleFieldCreateVo>, name?: string, templateId?: string, title?: string) { 
        this['fields'] = fields;
        this['name'] = name;
        this['template_id'] = templateId;
        this['title'] = title;
    }
    public withDescription(description: string): CreateConnectionDto {
        this['description'] = description;
        return this;
    }
    public withFields(fields: Array<ConnectionModuleFieldCreateVo>): CreateConnectionDto {
        this['fields'] = fields;
        return this;
    }
    public withName(name: string): CreateConnectionDto {
        this['name'] = name;
        return this;
    }
    public withTemplateId(templateId: string): CreateConnectionDto {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withTitle(title: string): CreateConnectionDto {
        this['title'] = title;
        return this;
    }
}