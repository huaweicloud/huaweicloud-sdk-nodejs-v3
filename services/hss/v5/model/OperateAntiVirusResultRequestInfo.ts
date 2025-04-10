import { AntiVirusEventWhiteRuleListRequestInfo } from './AntiVirusEventWhiteRuleListRequestInfo';
import { OperateResultRequestInfo } from './OperateResultRequestInfo';


export class OperateAntiVirusResultRequestInfo {
    private 'operate_type'?: string;
    public memo?: string;
    private 'operate_results'?: Array<OperateResultRequestInfo>;
    private 'event_white_rules'?: Array<AntiVirusEventWhiteRuleListRequestInfo>;
    public constructor(operateType?: string) { 
        this['operate_type'] = operateType;
    }
    public withOperateType(operateType: string): OperateAntiVirusResultRequestInfo {
        this['operate_type'] = operateType;
        return this;
    }
    public set operateType(operateType: string  | undefined) {
        this['operate_type'] = operateType;
    }
    public get operateType(): string | undefined {
        return this['operate_type'];
    }
    public withMemo(memo: string): OperateAntiVirusResultRequestInfo {
        this['memo'] = memo;
        return this;
    }
    public withOperateResults(operateResults: Array<OperateResultRequestInfo>): OperateAntiVirusResultRequestInfo {
        this['operate_results'] = operateResults;
        return this;
    }
    public set operateResults(operateResults: Array<OperateResultRequestInfo>  | undefined) {
        this['operate_results'] = operateResults;
    }
    public get operateResults(): Array<OperateResultRequestInfo> | undefined {
        return this['operate_results'];
    }
    public withEventWhiteRules(eventWhiteRules: Array<AntiVirusEventWhiteRuleListRequestInfo>): OperateAntiVirusResultRequestInfo {
        this['event_white_rules'] = eventWhiteRules;
        return this;
    }
    public set eventWhiteRules(eventWhiteRules: Array<AntiVirusEventWhiteRuleListRequestInfo>  | undefined) {
        this['event_white_rules'] = eventWhiteRules;
    }
    public get eventWhiteRules(): Array<AntiVirusEventWhiteRuleListRequestInfo> | undefined {
        return this['event_white_rules'];
    }
}