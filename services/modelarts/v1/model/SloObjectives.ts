

export class SloObjectives {
    private 'metric_ttft'?: number;
    private 'metric_tpot'?: number;
    public percental?: number;
    public constructor() { 
    }
    public withMetricTtft(metricTtft: number): SloObjectives {
        this['metric_ttft'] = metricTtft;
        return this;
    }
    public set metricTtft(metricTtft: number  | undefined) {
        this['metric_ttft'] = metricTtft;
    }
    public get metricTtft(): number | undefined {
        return this['metric_ttft'];
    }
    public withMetricTpot(metricTpot: number): SloObjectives {
        this['metric_tpot'] = metricTpot;
        return this;
    }
    public set metricTpot(metricTpot: number  | undefined) {
        this['metric_tpot'] = metricTpot;
    }
    public get metricTpot(): number | undefined {
        return this['metric_tpot'];
    }
    public withPercental(percental: number): SloObjectives {
        this['percental'] = percental;
        return this;
    }
}