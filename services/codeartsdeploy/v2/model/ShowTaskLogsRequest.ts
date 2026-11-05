

export class ShowTaskLogsRequest {
    private 'app_id'?: string;
    private 'record_id'?: string;
    public offset?: string;
    private 'end_offset'?: string;
    private 'step_id'?: string;
    private 'Content-Type'?: ShowTaskLogsRequestContentTypeEnum | string;
    public constructor(appId?: string, recordId?: string, offset?: string, endOffset?: string, contentType?: string) { 
        this['app_id'] = appId;
        this['record_id'] = recordId;
        this['offset'] = offset;
        this['end_offset'] = endOffset;
        this['Content-Type'] = contentType;
    }
    public withAppId(appId: string): ShowTaskLogsRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withRecordId(recordId: string): ShowTaskLogsRequest {
        this['record_id'] = recordId;
        return this;
    }
    public set recordId(recordId: string  | undefined) {
        this['record_id'] = recordId;
    }
    public get recordId(): string | undefined {
        return this['record_id'];
    }
    public withOffset(offset: string): ShowTaskLogsRequest {
        this['offset'] = offset;
        return this;
    }
    public withEndOffset(endOffset: string): ShowTaskLogsRequest {
        this['end_offset'] = endOffset;
        return this;
    }
    public set endOffset(endOffset: string  | undefined) {
        this['end_offset'] = endOffset;
    }
    public get endOffset(): string | undefined {
        return this['end_offset'];
    }
    public withStepId(stepId: string): ShowTaskLogsRequest {
        this['step_id'] = stepId;
        return this;
    }
    public set stepId(stepId: string  | undefined) {
        this['step_id'] = stepId;
    }
    public get stepId(): string | undefined {
        return this['step_id'];
    }
    public withContentType(contentType: ShowTaskLogsRequestContentTypeEnum | string): ShowTaskLogsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: ShowTaskLogsRequestContentTypeEnum | string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): ShowTaskLogsRequestContentTypeEnum | string | undefined {
        return this['Content-Type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowTaskLogsRequestContentTypeEnum {
    APPLICATION_JSONCHARSETUTF_8 = 'application/json;charset=utf-8',
    APPLICATION_JSON = 'application/json'
}
