

export class QueryJobNoticeItems {
    private 'notice_type'?: string;
    private 'enable_map'?: { [key: string]: boolean; };
    private 'param_config'?: string;
    public constructor() { 
    }
    public withNoticeType(noticeType: string): QueryJobNoticeItems {
        this['notice_type'] = noticeType;
        return this;
    }
    public set noticeType(noticeType: string  | undefined) {
        this['notice_type'] = noticeType;
    }
    public get noticeType(): string | undefined {
        return this['notice_type'];
    }
    public withEnableMap(enableMap: { [key: string]: boolean; }): QueryJobNoticeItems {
        this['enable_map'] = enableMap;
        return this;
    }
    public set enableMap(enableMap: { [key: string]: boolean; }  | undefined) {
        this['enable_map'] = enableMap;
    }
    public get enableMap(): { [key: string]: boolean; } | undefined {
        return this['enable_map'];
    }
    public withParamConfig(paramConfig: string): QueryJobNoticeItems {
        this['param_config'] = paramConfig;
        return this;
    }
    public set paramConfig(paramConfig: string  | undefined) {
        this['param_config'] = paramConfig;
    }
    public get paramConfig(): string | undefined {
        return this['param_config'];
    }
}