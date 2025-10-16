import { AlertNoticeConfig } from './AlertNoticeConfig';


export class AlertNoticeConfigList {
    private 'alert_notice_configs'?: Array<AlertNoticeConfig>;
    public constructor(alertNoticeConfigs?: Array<AlertNoticeConfig>) { 
        this['alert_notice_configs'] = alertNoticeConfigs;
    }
    public withAlertNoticeConfigs(alertNoticeConfigs: Array<AlertNoticeConfig>): AlertNoticeConfigList {
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