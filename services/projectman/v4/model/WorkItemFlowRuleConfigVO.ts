import { WorkItemFlowFieldConfigVO } from './WorkItemFlowFieldConfigVO';


export class WorkItemFlowRuleConfigVO {
    public code?: string;
    public open?: boolean;
    private 'config_value'?: Array<WorkItemFlowFieldConfigVO>;
    public constructor() { 
    }
    public withCode(code: string): WorkItemFlowRuleConfigVO {
        this['code'] = code;
        return this;
    }
    public withOpen(open: boolean): WorkItemFlowRuleConfigVO {
        this['open'] = open;
        return this;
    }
    public withConfigValue(configValue: Array<WorkItemFlowFieldConfigVO>): WorkItemFlowRuleConfigVO {
        this['config_value'] = configValue;
        return this;
    }
    public set configValue(configValue: Array<WorkItemFlowFieldConfigVO>  | undefined) {
        this['config_value'] = configValue;
    }
    public get configValue(): Array<WorkItemFlowFieldConfigVO> | undefined {
        return this['config_value'];
    }
}