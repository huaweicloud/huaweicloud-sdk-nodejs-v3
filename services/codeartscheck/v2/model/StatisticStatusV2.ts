

export class StatisticStatusV2 {
    public unresolved?: number;
    public resolved?: number;
    public dismissed?: number;
    public constructor() { 
    }
    public withUnresolved(unresolved: number): StatisticStatusV2 {
        this['unresolved'] = unresolved;
        return this;
    }
    public withResolved(resolved: number): StatisticStatusV2 {
        this['resolved'] = resolved;
        return this;
    }
    public withDismissed(dismissed: number): StatisticStatusV2 {
        this['dismissed'] = dismissed;
        return this;
    }
}