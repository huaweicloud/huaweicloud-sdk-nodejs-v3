

export class NotificationTemplate {
    private 'create_time'?: number;
    public desc?: string;
    private 'enterprise_project_id'?: string;
    public locale?: string;
    private 'modify_time'?: number;
    public name?: string;
    private 'project_id'?: string;
    public source?: string;
    public templates?: string;
    public type?: Array<string>;
    public constructor(createTime?: number, desc?: string, enterpriseProjectId?: string, locale?: string, modifyTime?: number, name?: string, projectId?: string, templates?: string, type?: Array<string>) { 
        this['create_time'] = createTime;
        this['desc'] = desc;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['locale'] = locale;
        this['modify_time'] = modifyTime;
        this['name'] = name;
        this['project_id'] = projectId;
        this['templates'] = templates;
        this['type'] = type;
    }
    public withCreateTime(createTime: number): NotificationTemplate {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withDesc(desc: string): NotificationTemplate {
        this['desc'] = desc;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): NotificationTemplate {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLocale(locale: string): NotificationTemplate {
        this['locale'] = locale;
        return this;
    }
    public withModifyTime(modifyTime: number): NotificationTemplate {
        this['modify_time'] = modifyTime;
        return this;
    }
    public set modifyTime(modifyTime: number  | undefined) {
        this['modify_time'] = modifyTime;
    }
    public get modifyTime(): number | undefined {
        return this['modify_time'];
    }
    public withName(name: string): NotificationTemplate {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): NotificationTemplate {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withSource(source: string): NotificationTemplate {
        this['source'] = source;
        return this;
    }
    public withTemplates(templates: string): NotificationTemplate {
        this['templates'] = templates;
        return this;
    }
    public withType(type: Array<string>): NotificationTemplate {
        this['type'] = type;
        return this;
    }
}