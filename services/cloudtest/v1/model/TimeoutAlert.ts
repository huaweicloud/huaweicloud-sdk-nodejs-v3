import { AlertTemplate } from './AlertTemplate';
import { TaskTimeoutPolicy } from './TaskTimeoutPolicy';
import { TestCaseTimeoutPolicy } from './TestCaseTimeoutPolicy';


export class TimeoutAlert {
    private 'alert_template'?: AlertTemplate;
    public enable?: string;
    private 'task_timeout_policy'?: TaskTimeoutPolicy;
    public testCaseTimeoutPolicy?: TestCaseTimeoutPolicy;
    public timeoutRetryTimes?: number;
    public constructor() { 
    }
    public withAlertTemplate(alertTemplate: AlertTemplate): TimeoutAlert {
        this['alert_template'] = alertTemplate;
        return this;
    }
    public set alertTemplate(alertTemplate: AlertTemplate  | undefined) {
        this['alert_template'] = alertTemplate;
    }
    public get alertTemplate(): AlertTemplate | undefined {
        return this['alert_template'];
    }
    public withEnable(enable: string): TimeoutAlert {
        this['enable'] = enable;
        return this;
    }
    public withTaskTimeoutPolicy(taskTimeoutPolicy: TaskTimeoutPolicy): TimeoutAlert {
        this['task_timeout_policy'] = taskTimeoutPolicy;
        return this;
    }
    public set taskTimeoutPolicy(taskTimeoutPolicy: TaskTimeoutPolicy  | undefined) {
        this['task_timeout_policy'] = taskTimeoutPolicy;
    }
    public get taskTimeoutPolicy(): TaskTimeoutPolicy | undefined {
        return this['task_timeout_policy'];
    }
    public withTestCaseTimeoutPolicy(testCaseTimeoutPolicy: TestCaseTimeoutPolicy): TimeoutAlert {
        this['testCaseTimeoutPolicy'] = testCaseTimeoutPolicy;
        return this;
    }
    public withTimeoutRetryTimes(timeoutRetryTimes: number): TimeoutAlert {
        this['timeoutRetryTimes'] = timeoutRetryTimes;
        return this;
    }
}