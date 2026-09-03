import { AlertTemplate } from './AlertTemplate';


export class BlockAlert {
    private 'alert_template'?: AlertTemplate;
    public enable?: string;
    public waitingCount?: number;
    public constructor() { 
    }
    public withAlertTemplate(alertTemplate: AlertTemplate): BlockAlert {
        this['alert_template'] = alertTemplate;
        return this;
    }
    public set alertTemplate(alertTemplate: AlertTemplate  | undefined) {
        this['alert_template'] = alertTemplate;
    }
    public get alertTemplate(): AlertTemplate | undefined {
        return this['alert_template'];
    }
    public withEnable(enable: string): BlockAlert {
        this['enable'] = enable;
        return this;
    }
    public withWaitingCount(waitingCount: number): BlockAlert {
        this['waitingCount'] = waitingCount;
        return this;
    }
}