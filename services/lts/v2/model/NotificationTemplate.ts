import { CreateNotificationTemplateRequestBody } from './CreateNotificationTemplateRequestBody';
import { SubTemplate } from './SubTemplate';


export class NotificationTemplate {
    public name: string;
    public type?: Array<string>;
    public desc: string;
    public source: string;
    public locale: NotificationTemplateLocaleEnum;
    public templates: Array<SubTemplate>;
    private 'create_time': number | undefined;
    private 'modify_time': number | undefined;
    private 'project_id': string | undefined;
    public constructor(name?: any, desc?: any, source?: any, locale?: any, templates?: any, createTime?: any, modifyTime?: any, projectId?: any) { 
        this['name'] = name;
        this['desc'] = desc;
        this['source'] = source;
        this['locale'] = locale;
        this['templates'] = templates;
        this['create_time'] = createTime;
        this['modify_time'] = modifyTime;
        this['project_id'] = projectId;
    }
    public withName(name: string): NotificationTemplate {
        this['name'] = name;
        return this;
    }
    public withType(type: Array<string>): NotificationTemplate {
        this['type'] = type;
        return this;
    }
    public withDesc(desc: string): NotificationTemplate {
        this['desc'] = desc;
        return this;
    }
    public withSource(source: string): NotificationTemplate {
        this['source'] = source;
        return this;
    }
    public withLocale(locale: NotificationTemplateLocaleEnum): NotificationTemplate {
        this['locale'] = locale;
        return this;
    }
    public withTemplates(templates: Array<SubTemplate>): NotificationTemplate {
        this['templates'] = templates;
        return this;
    }
    public withCreateTime(createTime: number): NotificationTemplate {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withModifyTime(modifyTime: number): NotificationTemplate {
        this['modify_time'] = modifyTime;
        return this;
    }
    public set modifyTime(modifyTime: number | undefined) {
        this['modify_time'] = modifyTime;
    }
    public get modifyTime() {
        return this['modify_time'];
    }
    public withProjectId(projectId: string): NotificationTemplate {
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
export enum NotificationTemplateLocaleEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
