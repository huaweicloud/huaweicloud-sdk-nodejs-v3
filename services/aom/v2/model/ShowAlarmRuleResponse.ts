import { MetaData } from './MetaData';
import { QueryAlarmResult } from './QueryAlarmResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAlarmRuleResponse extends SdkResponse {
    private 'meta_data'?: MetaData;
    public thresholds?: Array<QueryAlarmResult>;
    public constructor() { 
        super();
    }
    public withMetaData(metaData: MetaData): ShowAlarmRuleResponse {
        this['meta_data'] = metaData;
        return this;
    }
    public set metaData(metaData: MetaData  | undefined) {
        this['meta_data'] = metaData;
    }
    public get metaData(): MetaData | undefined {
        return this['meta_data'];
    }
    public withThresholds(thresholds: Array<QueryAlarmResult>): ShowAlarmRuleResponse {
        this['thresholds'] = thresholds;
        return this;
    }
}