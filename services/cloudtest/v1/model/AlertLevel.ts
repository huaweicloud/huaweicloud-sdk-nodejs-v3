import { AlertGroup } from './AlertGroup';


export class AlertLevel {
    private 'alert_channel'?: Array<string>;
    public alertGroups?: Array<AlertGroup>;
    public alertTemplateId?: string;
    public alertTimes?: number;
    public constructor() { 
    }
    public withAlertChannel(alertChannel: Array<string>): AlertLevel {
        this['alert_channel'] = alertChannel;
        return this;
    }
    public set alertChannel(alertChannel: Array<string>  | undefined) {
        this['alert_channel'] = alertChannel;
    }
    public get alertChannel(): Array<string> | undefined {
        return this['alert_channel'];
    }
    public withAlertGroups(alertGroups: Array<AlertGroup>): AlertLevel {
        this['alertGroups'] = alertGroups;
        return this;
    }
    public withAlertTemplateId(alertTemplateId: string): AlertLevel {
        this['alertTemplateId'] = alertTemplateId;
        return this;
    }
    public withAlertTimes(alertTimes: number): AlertLevel {
        this['alertTimes'] = alertTimes;
        return this;
    }
}