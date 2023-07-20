

export class BriefStructTemplateModel {
    private 'create_time'?: number;
    public id?: string;
    private 'template_name'?: string;
    private 'template_type'?: BriefStructTemplateModelTemplateTypeEnum | string;
    private 'project_id'?: string;
    public constructor(createTime?: number, id?: string, templateName?: string, templateType?: string, projectId?: string) { 
        this['create_time'] = createTime;
        this['id'] = id;
        this['template_name'] = templateName;
        this['template_type'] = templateType;
        this['project_id'] = projectId;
    }
    public withCreateTime(createTime: number): BriefStructTemplateModel {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withId(id: string): BriefStructTemplateModel {
        this['id'] = id;
        return this;
    }
    public withTemplateName(templateName: string): BriefStructTemplateModel {
        this['template_name'] = templateName;
        return this;
    }
    public set templateName(templateName: string  | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName(): string | undefined {
        return this['template_name'];
    }
    public withTemplateType(templateType: BriefStructTemplateModelTemplateTypeEnum | string): BriefStructTemplateModel {
        this['template_type'] = templateType;
        return this;
    }
    public set templateType(templateType: BriefStructTemplateModelTemplateTypeEnum | string  | undefined) {
        this['template_type'] = templateType;
    }
    public get templateType(): BriefStructTemplateModelTemplateTypeEnum | string | undefined {
        return this['template_type'];
    }
    public withProjectId(projectId: string): BriefStructTemplateModel {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BriefStructTemplateModelTemplateTypeEnum {
    REGEX = 'regex',
    JSON = 'json',
    SPLIT = 'split',
    NGINX = 'nginx'
}
