

export class BriefStructTemplateModel {
    private 'create_time': number | undefined;
    public id: string;
    private 'template_name': string | undefined;
    private 'template_type': BriefStructTemplateModelTemplateTypeEnum | undefined;
    private 'project_id': string | undefined;
    public constructor(createTime?: any, id?: any, templateName?: any, templateType?: any, projectId?: any) { 
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
    public set createTime(createTime: number | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
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
    public set templateName(templateName: string | undefined) {
        this['template_name'] = templateName;
    }
    public get templateName() {
        return this['template_name'];
    }
    public withTemplateType(templateType: BriefStructTemplateModelTemplateTypeEnum): BriefStructTemplateModel {
        this['template_type'] = templateType;
        return this;
    }
    public set templateType(templateType: BriefStructTemplateModelTemplateTypeEnum | undefined) {
        this['template_type'] = templateType;
    }
    public get templateType() {
        return this['template_type'];
    }
    public withProjectId(projectId: string): BriefStructTemplateModel {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
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
