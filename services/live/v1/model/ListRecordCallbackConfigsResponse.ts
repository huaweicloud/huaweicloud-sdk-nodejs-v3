import { RecordCallbackConfig } from './RecordCallbackConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRecordCallbackConfigsResponse extends SdkResponse {
    public total?: number;
    private 'callback_config'?: Array<RecordCallbackConfig>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListRecordCallbackConfigsResponse {
        this['total'] = total;
        return this;
    }
    public withCallbackConfig(callbackConfig: Array<RecordCallbackConfig>): ListRecordCallbackConfigsResponse {
        this['callback_config'] = callbackConfig;
        return this;
    }
    public set callbackConfig(callbackConfig: Array<RecordCallbackConfig>  | undefined) {
        this['callback_config'] = callbackConfig;
    }
    public get callbackConfig(): Array<RecordCallbackConfig> | undefined {
        return this['callback_config'];
    }
}