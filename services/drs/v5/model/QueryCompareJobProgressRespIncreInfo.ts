

export class QueryCompareJobProgressRespIncreInfo {
    public delay?: number;
    private 'src_speed'?: string;
    public rps?: number;
    private 'log_point'?: string;
    private 'recheck_entities'?: number;
    public constructor() { 
    }
    public withDelay(delay: number): QueryCompareJobProgressRespIncreInfo {
        this['delay'] = delay;
        return this;
    }
    public withSrcSpeed(srcSpeed: string): QueryCompareJobProgressRespIncreInfo {
        this['src_speed'] = srcSpeed;
        return this;
    }
    public set srcSpeed(srcSpeed: string  | undefined) {
        this['src_speed'] = srcSpeed;
    }
    public get srcSpeed(): string | undefined {
        return this['src_speed'];
    }
    public withRps(rps: number): QueryCompareJobProgressRespIncreInfo {
        this['rps'] = rps;
        return this;
    }
    public withLogPoint(logPoint: string): QueryCompareJobProgressRespIncreInfo {
        this['log_point'] = logPoint;
        return this;
    }
    public set logPoint(logPoint: string  | undefined) {
        this['log_point'] = logPoint;
    }
    public get logPoint(): string | undefined {
        return this['log_point'];
    }
    public withRecheckEntities(recheckEntities: number): QueryCompareJobProgressRespIncreInfo {
        this['recheck_entities'] = recheckEntities;
        return this;
    }
    public set recheckEntities(recheckEntities: number  | undefined) {
        this['recheck_entities'] = recheckEntities;
    }
    public get recheckEntities(): number | undefined {
        return this['recheck_entities'];
    }
}