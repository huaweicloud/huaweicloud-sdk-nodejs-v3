

export class RecoveryCondition {
    private 'recovery_timeframe'?: number;
    public constructor() { 
    }
    public withRecoveryTimeframe(recoveryTimeframe: number): RecoveryCondition {
        this['recovery_timeframe'] = recoveryTimeframe;
        return this;
    }
    public set recoveryTimeframe(recoveryTimeframe: number  | undefined) {
        this['recovery_timeframe'] = recoveryTimeframe;
    }
    public get recoveryTimeframe(): number | undefined {
        return this['recovery_timeframe'];
    }
}