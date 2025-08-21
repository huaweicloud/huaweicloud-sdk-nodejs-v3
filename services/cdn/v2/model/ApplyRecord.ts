import { Resource } from './Resource';
import { TemplateConfigs } from './TemplateConfigs';


export class ApplyRecord {
    public status?: string;
    private 'operator_id'?: string;
    private 'tml_name'?: string;
    public remark?: string;
    private 'tml_id'?: string;
    private 'apply_time'?: number;
    public type?: number;
    private 'account_id'?: string;
    public resources?: Array<Resource>;
    public configs?: TemplateConfigs;
    public constructor() { 
    }
    public withStatus(status: string): ApplyRecord {
        this['status'] = status;
        return this;
    }
    public withOperatorId(operatorId: string): ApplyRecord {
        this['operator_id'] = operatorId;
        return this;
    }
    public set operatorId(operatorId: string  | undefined) {
        this['operator_id'] = operatorId;
    }
    public get operatorId(): string | undefined {
        return this['operator_id'];
    }
    public withTmlName(tmlName: string): ApplyRecord {
        this['tml_name'] = tmlName;
        return this;
    }
    public set tmlName(tmlName: string  | undefined) {
        this['tml_name'] = tmlName;
    }
    public get tmlName(): string | undefined {
        return this['tml_name'];
    }
    public withRemark(remark: string): ApplyRecord {
        this['remark'] = remark;
        return this;
    }
    public withTmlId(tmlId: string): ApplyRecord {
        this['tml_id'] = tmlId;
        return this;
    }
    public set tmlId(tmlId: string  | undefined) {
        this['tml_id'] = tmlId;
    }
    public get tmlId(): string | undefined {
        return this['tml_id'];
    }
    public withApplyTime(applyTime: number): ApplyRecord {
        this['apply_time'] = applyTime;
        return this;
    }
    public set applyTime(applyTime: number  | undefined) {
        this['apply_time'] = applyTime;
    }
    public get applyTime(): number | undefined {
        return this['apply_time'];
    }
    public withType(type: number): ApplyRecord {
        this['type'] = type;
        return this;
    }
    public withAccountId(accountId: string): ApplyRecord {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withResources(resources: Array<Resource>): ApplyRecord {
        this['resources'] = resources;
        return this;
    }
    public withConfigs(configs: TemplateConfigs): ApplyRecord {
        this['configs'] = configs;
        return this;
    }
}