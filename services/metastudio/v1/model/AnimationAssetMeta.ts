

export class AnimationAssetMeta {
    private 'style_id'?: string;
    public duration?: number;
    private 'auto_analysis'?: boolean;
    private 'voice_delay'?: number;
    private 'animation_insert_restriction'?: AnimationAssetMetaAnimationInsertRestrictionEnum | string;
    public constructor() { 
    }
    public withStyleId(styleId: string): AnimationAssetMeta {
        this['style_id'] = styleId;
        return this;
    }
    public set styleId(styleId: string  | undefined) {
        this['style_id'] = styleId;
    }
    public get styleId(): string | undefined {
        return this['style_id'];
    }
    public withDuration(duration: number): AnimationAssetMeta {
        this['duration'] = duration;
        return this;
    }
    public withAutoAnalysis(autoAnalysis: boolean): AnimationAssetMeta {
        this['auto_analysis'] = autoAnalysis;
        return this;
    }
    public set autoAnalysis(autoAnalysis: boolean  | undefined) {
        this['auto_analysis'] = autoAnalysis;
    }
    public get autoAnalysis(): boolean | undefined {
        return this['auto_analysis'];
    }
    public withVoiceDelay(voiceDelay: number): AnimationAssetMeta {
        this['voice_delay'] = voiceDelay;
        return this;
    }
    public set voiceDelay(voiceDelay: number  | undefined) {
        this['voice_delay'] = voiceDelay;
    }
    public get voiceDelay(): number | undefined {
        return this['voice_delay'];
    }
    public withAnimationInsertRestriction(animationInsertRestriction: AnimationAssetMetaAnimationInsertRestrictionEnum | string): AnimationAssetMeta {
        this['animation_insert_restriction'] = animationInsertRestriction;
        return this;
    }
    public set animationInsertRestriction(animationInsertRestriction: AnimationAssetMetaAnimationInsertRestrictionEnum | string  | undefined) {
        this['animation_insert_restriction'] = animationInsertRestriction;
    }
    public get animationInsertRestriction(): AnimationAssetMetaAnimationInsertRestrictionEnum | string | undefined {
        return this['animation_insert_restriction'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AnimationAssetMetaAnimationInsertRestrictionEnum {
    ONLY_BEGINNING = 'ONLY_BEGINNING',
    ONLY_END = 'ONLY_END'
}
