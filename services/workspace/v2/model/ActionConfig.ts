

export class ActionConfig {
    public action?: string;
    private 'min_wait_time'?: number;
    private 'default_wait_time'?: number;
    private 'min_exec_time'?: number;
    private 'default_exec_time'?: number;
    public constructor() { 
    }
    public withAction(action: string): ActionConfig {
        this['action'] = action;
        return this;
    }
    public withMinWaitTime(minWaitTime: number): ActionConfig {
        this['min_wait_time'] = minWaitTime;
        return this;
    }
    public set minWaitTime(minWaitTime: number  | undefined) {
        this['min_wait_time'] = minWaitTime;
    }
    public get minWaitTime(): number | undefined {
        return this['min_wait_time'];
    }
    public withDefaultWaitTime(defaultWaitTime: number): ActionConfig {
        this['default_wait_time'] = defaultWaitTime;
        return this;
    }
    public set defaultWaitTime(defaultWaitTime: number  | undefined) {
        this['default_wait_time'] = defaultWaitTime;
    }
    public get defaultWaitTime(): number | undefined {
        return this['default_wait_time'];
    }
    public withMinExecTime(minExecTime: number): ActionConfig {
        this['min_exec_time'] = minExecTime;
        return this;
    }
    public set minExecTime(minExecTime: number  | undefined) {
        this['min_exec_time'] = minExecTime;
    }
    public get minExecTime(): number | undefined {
        return this['min_exec_time'];
    }
    public withDefaultExecTime(defaultExecTime: number): ActionConfig {
        this['default_exec_time'] = defaultExecTime;
        return this;
    }
    public set defaultExecTime(defaultExecTime: number  | undefined) {
        this['default_exec_time'] = defaultExecTime;
    }
    public get defaultExecTime(): number | undefined {
        return this['default_exec_time'];
    }
}