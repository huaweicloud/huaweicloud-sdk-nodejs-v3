import { RecordRule } from './RecordRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRecordRulesResponse extends SdkResponse {
    public total?: number;
    private 'record_config'?: Array<RecordRule>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListRecordRulesResponse {
        this['total'] = total;
        return this;
    }
    public withRecordConfig(recordConfig: Array<RecordRule>): ListRecordRulesResponse {
        this['record_config'] = recordConfig;
        return this;
    }
    public set recordConfig(recordConfig: Array<RecordRule>  | undefined) {
        this['record_config'] = recordConfig;
    }
    public get recordConfig(): Array<RecordRule> | undefined {
        return this['record_config'];
    }
}