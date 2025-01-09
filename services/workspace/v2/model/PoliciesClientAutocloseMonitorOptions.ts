

export class PoliciesClientAutocloseMonitorOptions {
    private 'autoclose_monitor_wait_time'?: number;
    public constructor() { 
    }
    public withAutocloseMonitorWaitTime(autocloseMonitorWaitTime: number): PoliciesClientAutocloseMonitorOptions {
        this['autoclose_monitor_wait_time'] = autocloseMonitorWaitTime;
        return this;
    }
    public set autocloseMonitorWaitTime(autocloseMonitorWaitTime: number  | undefined) {
        this['autoclose_monitor_wait_time'] = autocloseMonitorWaitTime;
    }
    public get autocloseMonitorWaitTime(): number | undefined {
        return this['autoclose_monitor_wait_time'];
    }
}