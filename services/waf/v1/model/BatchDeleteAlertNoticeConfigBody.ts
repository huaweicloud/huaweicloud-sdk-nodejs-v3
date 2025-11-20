import { DeleteAlertNoticeConfigBody } from './DeleteAlertNoticeConfigBody';


export class BatchDeleteAlertNoticeConfigBody {
    private 'alert_notice_configs'?: Array<DeleteAlertNoticeConfigBody>;
    public constructor(alertNoticeConfigs?: Array<DeleteAlertNoticeConfigBody>) { 
        this['alert_notice_configs'] = alertNoticeConfigs;
    }
    public withAlertNoticeConfigs(alertNoticeConfigs: Array<DeleteAlertNoticeConfigBody>): BatchDeleteAlertNoticeConfigBody {
        this['alert_notice_configs'] = alertNoticeConfigs;
        return this;
    }
    public set alertNoticeConfigs(alertNoticeConfigs: Array<DeleteAlertNoticeConfigBody>  | undefined) {
        this['alert_notice_configs'] = alertNoticeConfigs;
    }
    public get alertNoticeConfigs(): Array<DeleteAlertNoticeConfigBody> | undefined {
        return this['alert_notice_configs'];
    }
}