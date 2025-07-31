import { AddBaselineWhiteListRequestBodyRuleList } from './AddBaselineWhiteListRequestBodyRuleList';


export class AddBaselineWhiteListRequestBody {
    private 'os_type'?: string;
    private 'rule_type'?: string;
    private 'host_id_list'?: Array<string>;
    private 'rule_list'?: Array<AddBaselineWhiteListRequestBodyRuleList>;
    public description?: string;
    public constructor(osType?: string, ruleType?: string, ruleList?: Array<AddBaselineWhiteListRequestBodyRuleList>) { 
        this['os_type'] = osType;
        this['rule_type'] = ruleType;
        this['rule_list'] = ruleList;
    }
    public withOsType(osType: string): AddBaselineWhiteListRequestBody {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withRuleType(ruleType: string): AddBaselineWhiteListRequestBody {
        this['rule_type'] = ruleType;
        return this;
    }
    public set ruleType(ruleType: string  | undefined) {
        this['rule_type'] = ruleType;
    }
    public get ruleType(): string | undefined {
        return this['rule_type'];
    }
    public withHostIdList(hostIdList: Array<string>): AddBaselineWhiteListRequestBody {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
    public withRuleList(ruleList: Array<AddBaselineWhiteListRequestBodyRuleList>): AddBaselineWhiteListRequestBody {
        this['rule_list'] = ruleList;
        return this;
    }
    public set ruleList(ruleList: Array<AddBaselineWhiteListRequestBodyRuleList>  | undefined) {
        this['rule_list'] = ruleList;
    }
    public get ruleList(): Array<AddBaselineWhiteListRequestBodyRuleList> | undefined {
        return this['rule_list'];
    }
    public withDescription(description: string): AddBaselineWhiteListRequestBody {
        this['description'] = description;
        return this;
    }
}