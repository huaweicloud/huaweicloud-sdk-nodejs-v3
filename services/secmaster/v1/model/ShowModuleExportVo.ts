import { ShowModuleFieldExportVo } from './ShowModuleFieldExportVo';


export class ShowModuleExportVo {
    public children?: Array<ShowModuleExportVo>;
    public fields?: Array<ShowModuleFieldExportVo>;
    private 'module_id'?: string;
    public name?: string;
    private 'template_id'?: string;
    public constructor() { 
    }
    public withChildren(children: Array<ShowModuleExportVo>): ShowModuleExportVo {
        this['children'] = children;
        return this;
    }
    public withFields(fields: Array<ShowModuleFieldExportVo>): ShowModuleExportVo {
        this['fields'] = fields;
        return this;
    }
    public withModuleId(moduleId: string): ShowModuleExportVo {
        this['module_id'] = moduleId;
        return this;
    }
    public set moduleId(moduleId: string  | undefined) {
        this['module_id'] = moduleId;
    }
    public get moduleId(): string | undefined {
        return this['module_id'];
    }
    public withName(name: string): ShowModuleExportVo {
        this['name'] = name;
        return this;
    }
    public withTemplateId(templateId: string): ShowModuleExportVo {
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