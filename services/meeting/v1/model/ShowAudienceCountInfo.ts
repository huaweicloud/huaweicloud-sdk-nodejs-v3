

export class ShowAudienceCountInfo {
    public showAudienceMode?: number;
    public baseAudienceCount?: number;
    public multiple?: number;
    public constructor() { 
    }
    public withShowAudienceMode(showAudienceMode: number): ShowAudienceCountInfo {
        this['showAudienceMode'] = showAudienceMode;
        return this;
    }
    public withBaseAudienceCount(baseAudienceCount: number): ShowAudienceCountInfo {
        this['baseAudienceCount'] = baseAudienceCount;
        return this;
    }
    public withMultiple(multiple: number): ShowAudienceCountInfo {
        this['multiple'] = multiple;
        return this;
    }
}