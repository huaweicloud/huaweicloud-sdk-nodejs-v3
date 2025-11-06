
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNotificationTemplateByNameResponse extends SdkResponse {
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
    public constructor() { 
        super();
    }
    public withCreateTime(createTime: number): ListNotificationTemplateByNameResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withDesc(desc: string): ListNotificationTemplateByNameResponse {
        this['desc'] = desc;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListNotificationTemplateByNameResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withLocale(locale: string): ListNotificationTemplateByNameResponse {
        this['locale'] = locale;
        return this;
    }
    public withModifyTime(modifyTime: number): ListNotificationTemplateByNameResponse {
        this['modify_time'] = modifyTime;
        return this;
    }
    public set modifyTime(modifyTime: number  | undefined) {
        this['modify_time'] = modifyTime;
    }
    public get modifyTime(): number | undefined {
        return this['modify_time'];
    }
    public withName(name: string): ListNotificationTemplateByNameResponse {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): ListNotificationTemplateByNameResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withSource(source: string): ListNotificationTemplateByNameResponse {
        this['source'] = source;
        return this;
    }
    public withTemplates(templates: string): ListNotificationTemplateByNameResponse {
        this['templates'] = templates;
        return this;
    }
    public withType(type: Array<string>): ListNotificationTemplateByNameResponse {
        this['type'] = type;
        return this;
    }
}