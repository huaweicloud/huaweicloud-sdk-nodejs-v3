import { ActionConfig } from './ActionConfig';


export class LifeCycleTypeConfigRsp {
    private 'min_wait_time'?: number;
    private 'default_wait_time'?: number;
    private 'min_exec_time'?: number;
    private 'default_exec_time'?: number;
    private 'support_exec_time'?: boolean;
    public actions?: Array<ActionConfig>;
    public constructor() { 
    }
    public withMinWaitTime(minWaitTime: number): LifeCycleTypeConfigRsp {
        this['min_wait_time'] = minWaitTime;
        return this;
    }
    public set minWaitTime(minWaitTime: number  | undefined) {
        this['min_wait_time'] = minWaitTime;
    }
    public get minWaitTime(): number | undefined {
        return this['min_wait_time'];
    }
    public withDefaultWaitTime(defaultWaitTime: number): LifeCycleTypeConfigRsp {
        this['default_wait_time'] = defaultWaitTime;
        return this;
    }
    public set defaultWaitTime(defaultWaitTime: number  | undefined) {
        this['default_wait_time'] = defaultWaitTime;
    }
    public get defaultWaitTime(): number | undefined {
        return this['default_wait_time'];
    }
    public withMinExecTime(minExecTime: number): LifeCycleTypeConfigRsp {
        this['min_exec_time'] = minExecTime;
        return this;
    }
    public set minExecTime(minExecTime: number  | undefined) {
        this['min_exec_time'] = minExecTime;
    }
    public get minExecTime(): number | undefined {
        return this['min_exec_time'];
    }
    public withDefaultExecTime(defaultExecTime: number): LifeCycleTypeConfigRsp {
        this['default_exec_time'] = defaultExecTime;
        return this;
    }
    public set defaultExecTime(defaultExecTime: number  | undefined) {
        this['default_exec_time'] = defaultExecTime;
    }
    public get defaultExecTime(): number | undefined {
        return this['default_exec_time'];
    }
    public withSupportExecTime(supportExecTime: boolean): LifeCycleTypeConfigRsp {
        this['support_exec_time'] = supportExecTime;
        return this;
    }
    public set supportExecTime(supportExecTime: boolean  | undefined) {
        this['support_exec_time'] = supportExecTime;
    }
    public get supportExecTime(): boolean | undefined {
        return this['support_exec_time'];
    }
    public withActions(actions: Array<ActionConfig>): LifeCycleTypeConfigRsp {
        this['actions'] = actions;
        return this;
    }
}