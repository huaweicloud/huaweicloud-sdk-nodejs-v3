

export class QueryCompareJobProgressRespFullInfo {
    public progress?: number;
    private 'src_speed'?: string;
    private 'recheck_entities'?: number;
    public constructor() { 
    }
    public withProgress(progress: number): QueryCompareJobProgressRespFullInfo {
        this['progress'] = progress;
        return this;
    }
    public withSrcSpeed(srcSpeed: string): QueryCompareJobProgressRespFullInfo {
        this['src_speed'] = srcSpeed;
        return this;
    }
    public set srcSpeed(srcSpeed: string  | undefined) {
        this['src_speed'] = srcSpeed;
    }
    public get srcSpeed(): string | undefined {
        return this['src_speed'];
    }
    public withRecheckEntities(recheckEntities: number): QueryCompareJobProgressRespFullInfo {
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