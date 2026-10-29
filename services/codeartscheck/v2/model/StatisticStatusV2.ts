

export class StatisticStatusV2 {
    public unresolved?: number;
    public resolved?: number;
    public dismissed?: number;
    public fixed?: number;
    public solved?: number;
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
    public withFixed(fixed: number): StatisticStatusV2 {
        this['fixed'] = fixed;
        return this;
    }
    public withSolved(solved: number): StatisticStatusV2 {
        this['solved'] = solved;
        return this;
    }
}