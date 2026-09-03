import { AlertExpression } from './AlertExpression';
import { AlertTemplate } from './AlertTemplate';
import { BlockAlert } from './BlockAlert';
import { ErrorAlert } from './ErrorAlert';
import { FailedAlert } from './FailedAlert';
import { TimeoutAlert } from './TimeoutAlert';


export class AlertConfigVo {
    private 'alert_expression'?: Array<AlertExpression>;
    public alertPeriodBegin?: string;
    public alertPeriodEnd?: string;
    public blockAlert?: BlockAlert;
    public defaultAlertTemplate?: AlertTemplate;
    public enable?: string;
    public errorAlert?: ErrorAlert;
    public failedAlert?: FailedAlert;
    public recoverNoticeEnable?: string;
    public restrainAlertEnable?: string;
    private 'resume_alert_num'?: number;
    public resumeAlertTime?: string;
    public timeoutAlert?: TimeoutAlert;
    public timeoutAlertV4?: TimeoutAlert;
    public constructor() { 
    }
    public withAlertExpression(alertExpression: Array<AlertExpression>): AlertConfigVo {
        this['alert_expression'] = alertExpression;
        return this;
    }
    public set alertExpression(alertExpression: Array<AlertExpression>  | undefined) {
        this['alert_expression'] = alertExpression;
    }
    public get alertExpression(): Array<AlertExpression> | undefined {
        return this['alert_expression'];
    }
    public withAlertPeriodBegin(alertPeriodBegin: string): AlertConfigVo {
        this['alertPeriodBegin'] = alertPeriodBegin;
        return this;
    }
    public withAlertPeriodEnd(alertPeriodEnd: string): AlertConfigVo {
        this['alertPeriodEnd'] = alertPeriodEnd;
        return this;
    }
    public withBlockAlert(blockAlert: BlockAlert): AlertConfigVo {
        this['blockAlert'] = blockAlert;
        return this;
    }
    public withDefaultAlertTemplate(defaultAlertTemplate: AlertTemplate): AlertConfigVo {
        this['defaultAlertTemplate'] = defaultAlertTemplate;
        return this;
    }
    public withEnable(enable: string): AlertConfigVo {
        this['enable'] = enable;
        return this;
    }
    public withErrorAlert(errorAlert: ErrorAlert): AlertConfigVo {
        this['errorAlert'] = errorAlert;
        return this;
    }
    public withFailedAlert(failedAlert: FailedAlert): AlertConfigVo {
        this['failedAlert'] = failedAlert;
        return this;
    }
    public withRecoverNoticeEnable(recoverNoticeEnable: string): AlertConfigVo {
        this['recoverNoticeEnable'] = recoverNoticeEnable;
        return this;
    }
    public withRestrainAlertEnable(restrainAlertEnable: string): AlertConfigVo {
        this['restrainAlertEnable'] = restrainAlertEnable;
        return this;
    }
    public withResumeAlertNum(resumeAlertNum: number): AlertConfigVo {
        this['resume_alert_num'] = resumeAlertNum;
        return this;
    }
    public set resumeAlertNum(resumeAlertNum: number  | undefined) {
        this['resume_alert_num'] = resumeAlertNum;
    }
    public get resumeAlertNum(): number | undefined {
        return this['resume_alert_num'];
    }
    public withResumeAlertTime(resumeAlertTime: string): AlertConfigVo {
        this['resumeAlertTime'] = resumeAlertTime;
        return this;
    }
    public withTimeoutAlert(timeoutAlert: TimeoutAlert): AlertConfigVo {
        this['timeoutAlert'] = timeoutAlert;
        return this;
    }
    public withTimeoutAlertV4(timeoutAlertV4: TimeoutAlert): AlertConfigVo {
        this['timeoutAlertV4'] = timeoutAlertV4;
        return this;
    }
}