import { CreateNotificationTemplateRequestBody } from './CreateNotificationTemplateRequestBody';
import { SubTemplate } from './SubTemplate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowNotificationTemplateResponse extends SdkResponse {
    public name?: string;
    public type?: Array<string>;
    public desc?: string;
    public source?: string;
    public locale?: ShowNotificationTemplateResponseLocaleEnum | string;
    public templates?: Array<SubTemplate>;
    private 'create_time'?: number;
    private 'modify_time'?: number;
    private 'project_id'?: string;
    public constructor(name?: string, desc?: string, source?: string, locale?: string, templates?: Array<SubTemplate>, createTime?: number, modifyTime?: number, projectId?: string) { 
        super();
        this['name'] = name;
        this['desc'] = desc;
        this['source'] = source;
        this['locale'] = locale;
        this['templates'] = templates;
        this['create_time'] = createTime;
        this['modify_time'] = modifyTime;
        this['project_id'] = projectId;
    }
    public withName(name: string): ShowNotificationTemplateResponse {
        this['name'] = name;
        return this;
    }
    public withType(type: Array<string>): ShowNotificationTemplateResponse {
        this['type'] = type;
        return this;
    }
    public withDesc(desc: string): ShowNotificationTemplateResponse {
        this['desc'] = desc;
        return this;
    }
    public withSource(source: string): ShowNotificationTemplateResponse {
        this['source'] = source;
        return this;
    }
    public withLocale(locale: ShowNotificationTemplateResponseLocaleEnum | string): ShowNotificationTemplateResponse {
        this['locale'] = locale;
        return this;
    }
    public withTemplates(templates: Array<SubTemplate>): ShowNotificationTemplateResponse {
        this['templates'] = templates;
        return this;
    }
    public withCreateTime(createTime: number): ShowNotificationTemplateResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withModifyTime(modifyTime: number): ShowNotificationTemplateResponse {
        this['modify_time'] = modifyTime;
        return this;
    }
    public set modifyTime(modifyTime: number  | undefined) {
        this['modify_time'] = modifyTime;
    }
    public get modifyTime(): number | undefined {
        return this['modify_time'];
    }
    public withProjectId(projectId: string): ShowNotificationTemplateResponse {
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
export enum ShowNotificationTemplateResponseLocaleEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
