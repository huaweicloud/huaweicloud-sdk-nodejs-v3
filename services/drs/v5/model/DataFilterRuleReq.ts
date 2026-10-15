import { DataFilteringAdvancedSetting } from './DataFilteringAdvancedSetting';
import { GeneralTransformationReq } from './GeneralTransformationReq';


export class DataFilterRuleReq {
    private 'general_filtering_list'?: Array<GeneralTransformationReq>;
    private 'advanced_setting_list'?: Array<DataFilteringAdvancedSetting>;
    public source?: DataFilterRuleReqSourceEnum | string;
    private 'data_filter_type'?: string;
    public constructor() { 
    }
    public withGeneralFilteringList(generalFilteringList: Array<GeneralTransformationReq>): DataFilterRuleReq {
        this['general_filtering_list'] = generalFilteringList;
        return this;
    }
    public set generalFilteringList(generalFilteringList: Array<GeneralTransformationReq>  | undefined) {
        this['general_filtering_list'] = generalFilteringList;
    }
    public get generalFilteringList(): Array<GeneralTransformationReq> | undefined {
        return this['general_filtering_list'];
    }
    public withAdvancedSettingList(advancedSettingList: Array<DataFilteringAdvancedSetting>): DataFilterRuleReq {
        this['advanced_setting_list'] = advancedSettingList;
        return this;
    }
    public set advancedSettingList(advancedSettingList: Array<DataFilteringAdvancedSetting>  | undefined) {
        this['advanced_setting_list'] = advancedSettingList;
    }
    public get advancedSettingList(): Array<DataFilteringAdvancedSetting> | undefined {
        return this['advanced_setting_list'];
    }
    public withSource(source: DataFilterRuleReqSourceEnum | string): DataFilterRuleReq {
        this['source'] = source;
        return this;
    }
    public withDataFilterType(dataFilterType: string): DataFilterRuleReq {
        this['data_filter_type'] = dataFilterType;
        return this;
    }
    public set dataFilterType(dataFilterType: string  | undefined) {
        this['data_filter_type'] = dataFilterType;
    }
    public get dataFilterType(): string | undefined {
        return this['data_filter_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DataFilterRuleReqSourceEnum {
    JOB = 'job',
    COMPARE = 'compare'
}
