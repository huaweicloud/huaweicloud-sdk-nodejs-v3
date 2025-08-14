

export class UpdateNoticeRequestBody {
    private 'notice_type'?: string;
    private 'enabled_event_type_names'?: Array<string>;
    private 'send_switch'?: string;
    private 'param_config'?: string;
    private 'use_project_notice'?: string;
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
    public withSendSwitch(sendSwitch: string): UpdateNoticeRequestBody {
        this['send_switch'] = sendSwitch;
        return this;
    }
    public set sendSwitch(sendSwitch: string  | undefined) {
        this['send_switch'] = sendSwitch;
    }
    public get sendSwitch(): string | undefined {
        return this['send_switch'];
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
    public withUseProjectNotice(useProjectNotice: string): UpdateNoticeRequestBody {
        this['use_project_notice'] = useProjectNotice;
        return this;
    }
    public set useProjectNotice(useProjectNotice: string  | undefined) {
        this['use_project_notice'] = useProjectNotice;
    }
    public get useProjectNotice(): string | undefined {
        return this['use_project_notice'];
    }
}