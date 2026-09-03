import { AlertGroup } from './AlertGroup';


export class OperateNotice {
    private 'alert_channel'?: string;
    public enable?: string;
    public groups?: Array<AlertGroup>;
    public operateTypes?: Array<string>;
    public constructor() { 
    }
    public withAlertChannel(alertChannel: string): OperateNotice {
        this['alert_channel'] = alertChannel;
        return this;
    }
    public set alertChannel(alertChannel: string  | undefined) {
        this['alert_channel'] = alertChannel;
    }
    public get alertChannel(): string | undefined {
        return this['alert_channel'];
    }
    public withEnable(enable: string): OperateNotice {
        this['enable'] = enable;
        return this;
    }
    public withGroups(groups: Array<AlertGroup>): OperateNotice {
        this['groups'] = groups;
        return this;
    }
    public withOperateTypes(operateTypes: Array<string>): OperateNotice {
        this['operateTypes'] = operateTypes;
        return this;
    }
}