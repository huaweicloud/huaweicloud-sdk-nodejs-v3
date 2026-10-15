import { DataFilterObjectResp } from './DataFilterObjectResp';
import { DataFilteringAdvancedSetting } from './DataFilteringAdvancedSetting';
import { GeneralDataFilterResp } from './GeneralDataFilterResp';


export class DataFilterRuleResp {
    private 'batch_id'?: number;
    private 'filter_object_list'?: Array<DataFilterObjectResp>;
    private 'filter_rules_resp'?: GeneralDataFilterResp;
    private 'advanced_setting_resp'?: DataFilteringAdvancedSetting;
    public constructor() { 
    }
    public withBatchId(batchId: number): DataFilterRuleResp {
        this['batch_id'] = batchId;
        return this;
    }
    public set batchId(batchId: number  | undefined) {
        this['batch_id'] = batchId;
    }
    public get batchId(): number | undefined {
        return this['batch_id'];
    }
    public withFilterObjectList(filterObjectList: Array<DataFilterObjectResp>): DataFilterRuleResp {
        this['filter_object_list'] = filterObjectList;
        return this;
    }
    public set filterObjectList(filterObjectList: Array<DataFilterObjectResp>  | undefined) {
        this['filter_object_list'] = filterObjectList;
    }
    public get filterObjectList(): Array<DataFilterObjectResp> | undefined {
        return this['filter_object_list'];
    }
    public withFilterRulesResp(filterRulesResp: GeneralDataFilterResp): DataFilterRuleResp {
        this['filter_rules_resp'] = filterRulesResp;
        return this;
    }
    public set filterRulesResp(filterRulesResp: GeneralDataFilterResp  | undefined) {
        this['filter_rules_resp'] = filterRulesResp;
    }
    public get filterRulesResp(): GeneralDataFilterResp | undefined {
        return this['filter_rules_resp'];
    }
    public withAdvancedSettingResp(advancedSettingResp: DataFilteringAdvancedSetting): DataFilterRuleResp {
        this['advanced_setting_resp'] = advancedSettingResp;
        return this;
    }
    public set advancedSettingResp(advancedSettingResp: DataFilteringAdvancedSetting  | undefined) {
        this['advanced_setting_resp'] = advancedSettingResp;
    }
    public get advancedSettingResp(): DataFilteringAdvancedSetting | undefined {
        return this['advanced_setting_resp'];
    }
}