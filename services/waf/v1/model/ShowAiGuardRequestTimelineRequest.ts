

export class ShowAiGuardRequestTimelineRequest {
    public from?: number;
    public to?: number;
    private 'app_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'detect_type'?: ShowAiGuardRequestTimelineRequestDetectTypeEnum | string;
    private 'Content-Type'?: string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withFrom(from: number): ShowAiGuardRequestTimelineRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ShowAiGuardRequestTimelineRequest {
        this['to'] = to;
        return this;
    }
    public withAppId(appId: string): ShowAiGuardRequestTimelineRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withOffset(offset: number): ShowAiGuardRequestTimelineRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowAiGuardRequestTimelineRequest {
        this['limit'] = limit;
        return this;
    }
    public withDetectType(detectType: ShowAiGuardRequestTimelineRequestDetectTypeEnum | string): ShowAiGuardRequestTimelineRequest {
        this['detect_type'] = detectType;
        return this;
    }
    public set detectType(detectType: ShowAiGuardRequestTimelineRequestDetectTypeEnum | string  | undefined) {
        this['detect_type'] = detectType;
    }
    public get detectType(): ShowAiGuardRequestTimelineRequestDetectTypeEnum | string | undefined {
        return this['detect_type'];
    }
    public withContentType(contentType: string): ShowAiGuardRequestTimelineRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowAiGuardRequestTimelineRequestDetectTypeEnum {
    TEXT = 'text',
    IMAGE = 'image'
}
