
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAppConfigsTemplateResponse extends SdkResponse {
    private 'tpl_id'?: string;
    public name?: string;
    public description?: string;
    private 'config_tabs'?: object;
    private 'default_values'?: object;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
        super();
    }
    public withTplId(tplId: string): ShowAppConfigsTemplateResponse {
        this['tpl_id'] = tplId;
        return this;
    }
    public set tplId(tplId: string  | undefined) {
        this['tpl_id'] = tplId;
    }
    public get tplId(): string | undefined {
        return this['tpl_id'];
    }
    public withName(name: string): ShowAppConfigsTemplateResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ShowAppConfigsTemplateResponse {
        this['description'] = description;
        return this;
    }
    public withConfigTabs(configTabs: object): ShowAppConfigsTemplateResponse {
        this['config_tabs'] = configTabs;
        return this;
    }
    public set configTabs(configTabs: object  | undefined) {
        this['config_tabs'] = configTabs;
    }
    public get configTabs(): object | undefined {
        return this['config_tabs'];
    }
    public withDefaultValues(defaultValues: object): ShowAppConfigsTemplateResponse {
        this['default_values'] = defaultValues;
        return this;
    }
    public set defaultValues(defaultValues: object  | undefined) {
        this['default_values'] = defaultValues;
    }
    public get defaultValues(): object | undefined {
        return this['default_values'];
    }
    public withCreateTime(createTime: string): ShowAppConfigsTemplateResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowAppConfigsTemplateResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}