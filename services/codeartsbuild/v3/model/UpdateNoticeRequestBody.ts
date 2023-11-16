

export class UpdateNoticeRequestBody {
    private 'notice_type'?: string;
    private 'enabled_event_type_names'?: Array<string>;
    private 'param_config'?: string;
    public constructor(noticeType?: string, enabledEventTypeNames?: Array<string>) { 
        this['notice_type'] = noticeType;
        this['enabled_event_type_names'] = enabledEventTypeNames;
    }
    public withNoticeType(noticeType: string): UpdateNoticeRequestBody {
        this['notice_type'] = noticeType;
        return this;
    }
    public set noticeType(noticeType: string  | undefined) {
        this['notice_type'] = noticeType;
    }
    public get noticeType(): string | undefined {
        return this['notice_type'];
    }
    public withEnabledEventTypeNames(enabledEventTypeNames: Array<string>): UpdateNoticeRequestBody {
        this['enabled_event_type_names'] = enabledEventTypeNames;
        return this;
    }
    public set enabledEventTypeNames(enabledEventTypeNames: Array<string>  | undefined) {
        this['enabled_event_type_names'] = enabledEventTypeNames;
    }
    public get enabledEventTypeNames(): Array<string> | undefined {
        return this['enabled_event_type_names'];
    }
    public withParamConfig(paramConfig: string): UpdateNoticeRequestBody {
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