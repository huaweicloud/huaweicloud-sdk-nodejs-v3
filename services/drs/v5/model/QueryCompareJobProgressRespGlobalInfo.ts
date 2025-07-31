

export class QueryCompareJobProgressRespGlobalInfo {
    private 'src_speed'?: string;
    public constructor() { 
    }
    public withSrcSpeed(srcSpeed: string): QueryCompareJobProgressRespGlobalInfo {
        this['src_speed'] = srcSpeed;
        return this;
    }
    public set srcSpeed(srcSpeed: string  | undefined) {
        this['src_speed'] = srcSpeed;
    }
    public get srcSpeed(): string | undefined {
        return this['src_speed'];
    }
}