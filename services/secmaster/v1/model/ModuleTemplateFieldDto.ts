

export class ModuleTemplateFieldDto {
    private 'template_ids'?: Array<string>;
    public constructor(templateIds?: Array<string>) { 
        this['template_ids'] = templateIds;
    }
    public withTemplateIds(templateIds: Array<string>): ModuleTemplateFieldDto {
        this['template_ids'] = templateIds;
        return this;
    }
    public set templateIds(templateIds: Array<string>  | undefined) {
        this['template_ids'] = templateIds;
    }
    public get templateIds(): Array<string> | undefined {
        return this['template_ids'];
    }
}