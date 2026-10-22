

export class ShowAiGuardAttackDistributionRequest {
    public from?: number;
    public to?: number;
    private 'app_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'detect_type'?: ShowAiGuardAttackDistributionRequestDetectTypeEnum | string;
    private 'Content-Type'?: string;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withFrom(from: number): ShowAiGuardAttackDistributionRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ShowAiGuardAttackDistributionRequest {
        this['to'] = to;
        return this;
    }
    public withAppId(appId: string): ShowAiGuardAttackDistributionRequest {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withOffset(offset: number): ShowAiGuardAttackDistributionRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowAiGuardAttackDistributionRequest {
        this['limit'] = limit;
        return this;
    }
    public withDetectType(detectType: ShowAiGuardAttackDistributionRequestDetectTypeEnum | string): ShowAiGuardAttackDistributionRequest {
        this['detect_type'] = detectType;
        return this;
    }
    public set detectType(detectType: ShowAiGuardAttackDistributionRequestDetectTypeEnum | string  | undefined) {
        this['detect_type'] = detectType;
    }
    public get detectType(): ShowAiGuardAttackDistributionRequestDetectTypeEnum | string | undefined {
        return this['detect_type'];
    }
    public withContentType(contentType: string): ShowAiGuardAttackDistributionRequest {
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
export enum ShowAiGuardAttackDistributionRequestDetectTypeEnum {
    TEXT = 'text',
    IMAGE = 'image'
}
