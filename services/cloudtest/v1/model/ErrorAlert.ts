import { AlertTemplate } from './AlertTemplate';
import { TaskErrorPolicy } from './TaskErrorPolicy';


export class ErrorAlert {
    private 'alert_template'?: AlertTemplate;
    public enable?: string;
    public taskErrorPolicy?: TaskErrorPolicy;
    public constructor() { 
    }
    public withAlertTemplate(alertTemplate: AlertTemplate): ErrorAlert {
        this['alert_template'] = alertTemplate;
        return this;
    }
    public set alertTemplate(alertTemplate: AlertTemplate  | undefined) {
        this['alert_template'] = alertTemplate;
    }
    public get alertTemplate(): AlertTemplate | undefined {
        return this['alert_template'];
    }
    public withEnable(enable: string): ErrorAlert {
        this['enable'] = enable;
        return this;
    }
    public withTaskErrorPolicy(taskErrorPolicy: TaskErrorPolicy): ErrorAlert {
        this['taskErrorPolicy'] = taskErrorPolicy;
        return this;
    }
}