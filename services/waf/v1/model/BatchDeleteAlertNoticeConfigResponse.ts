import { AlertNoticeConfig } from './AlertNoticeConfig';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteAlertNoticeConfigResponse extends SdkResponse {
    private 'alert_notice_configs'?: Array<AlertNoticeConfig>;
    public constructor() { 
        super();
    }
    public withAlertNoticeConfigs(alertNoticeConfigs: Array<AlertNoticeConfig>): BatchDeleteAlertNoticeConfigResponse {
        this['alert_notice_configs'] = alertNoticeConfigs;
        return this;
    }
    public set alertNoticeConfigs(alertNoticeConfigs: Array<AlertNoticeConfig>  | undefined) {
        this['alert_notice_configs'] = alertNoticeConfigs;
    }
    public get alertNoticeConfigs(): Array<AlertNoticeConfig> | undefined {
        return this['alert_notice_configs'];
    }
}