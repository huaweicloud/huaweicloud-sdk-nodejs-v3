import { TemplateConfigs } from './TemplateConfigs';


export class TemplateItem {
    private 'account_id'?: string;
    private 'tml_name'?: string;
    public remark?: string;
    private 'tml_id'?: string;
    public type?: number;
    private 'create_time'?: number;
    private 'modify_time'?: number;
    public configs?: TemplateConfigs;
    public constructor() { 
    }
    public withAccountId(accountId: string): TemplateItem {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withTmlName(tmlName: string): TemplateItem {
        this['tml_name'] = tmlName;
        return this;
    }
    public set tmlName(tmlName: string  | undefined) {
        this['tml_name'] = tmlName;
    }
    public get tmlName(): string | undefined {
        return this['tml_name'];
    }
    public withRemark(remark: string): TemplateItem {
        this['remark'] = remark;
        return this;
    }
    public withTmlId(tmlId: string): TemplateItem {
        this['tml_id'] = tmlId;
        return this;
    }
    public set tmlId(tmlId: string  | undefined) {
        this['tml_id'] = tmlId;
    }
    public get tmlId(): string | undefined {
        return this['tml_id'];
    }
    public withType(type: number): TemplateItem {
        this['type'] = type;
        return this;
    }
    public withCreateTime(createTime: number): TemplateItem {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withModifyTime(modifyTime: number): TemplateItem {
        this['modify_time'] = modifyTime;
        return this;
    }
    public set modifyTime(modifyTime: number  | undefined) {
        this['modify_time'] = modifyTime;
    }
    public get modifyTime(): number | undefined {
        return this['modify_time'];
    }
    public withConfigs(configs: TemplateConfigs): TemplateItem {
        this['configs'] = configs;
        return this;
    }
}