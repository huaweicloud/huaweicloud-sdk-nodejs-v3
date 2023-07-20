import { CreateNotificationTemplateRequestBody } from './CreateNotificationTemplateRequestBody';
import { SubTemplate } from './SubTemplate';


export class NotificationTemplate {
    public name?: string;
    public type?: Array<string>;
    public desc?: string;
    public source?: string;
    public locale?: NotificationTemplateLocaleEnum | string;
    public templates?: Array<SubTemplate>;
    private 'create_time'?: number;
    private 'modify_time'?: number;
    private 'project_id'?: string;
    public constructor(name?: string, desc?: string, source?: string, locale?: string, templates?: Array<SubTemplate>, createTime?: number, modifyTime?: number, projectId?: string) { 
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
    public withLocale(locale: NotificationTemplateLocaleEnum | string): NotificationTemplate {
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
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
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
}

/**
    * @export
    * @enum {string}
    */
export enum NotificationTemplateLocaleEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
