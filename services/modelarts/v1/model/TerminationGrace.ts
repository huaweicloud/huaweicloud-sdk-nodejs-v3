

export class TerminationGrace {
    private 'pre_stop_cmd'?: string;
    private 'termination_grace_period_seconds'?: number;
    public constructor() { 
    }
    public withPreStopCmd(preStopCmd: string): TerminationGrace {
        this['pre_stop_cmd'] = preStopCmd;
        return this;
    }
    public set preStopCmd(preStopCmd: string  | undefined) {
        this['pre_stop_cmd'] = preStopCmd;
    }
    public get preStopCmd(): string | undefined {
        return this['pre_stop_cmd'];
    }
    public withTerminationGracePeriodSeconds(terminationGracePeriodSeconds: number): TerminationGrace {
        this['termination_grace_period_seconds'] = terminationGracePeriodSeconds;
        return this;
    }
    public set terminationGracePeriodSeconds(terminationGracePeriodSeconds: number  | undefined) {
        this['termination_grace_period_seconds'] = terminationGracePeriodSeconds;
    }
    public get terminationGracePeriodSeconds(): number | undefined {
        return this['termination_grace_period_seconds'];
    }
}