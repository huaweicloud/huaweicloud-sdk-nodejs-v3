

export class VoiceCapability {
    private 'is_support_phoneme_en'?: boolean;
    private 'is_support_phoneme'?: boolean;
    private 'is_support_break_time'?: boolean;
    private 'is_support_break_strength'?: boolean;
    private 'is_support_speed'?: boolean;
    private 'is_support_prosody'?: boolean;
    private 'is_support_ssml_say_as'?: boolean;
    private 'is_support_ssml_sub'?: boolean;
    private 'is_support_word'?: boolean;
    private 'is_support_voice_cache'?: boolean;
    private 'conversion_rate'?: number;
    private 'conversion_rate_en'?: number;
    private 'is_support_srt'?: boolean;
    public constructor() { 
    }
    public withIsSupportPhonemeEn(isSupportPhonemeEn: boolean): VoiceCapability {
        this['is_support_phoneme_en'] = isSupportPhonemeEn;
        return this;
    }
    public set isSupportPhonemeEn(isSupportPhonemeEn: boolean  | undefined) {
        this['is_support_phoneme_en'] = isSupportPhonemeEn;
    }
    public get isSupportPhonemeEn(): boolean | undefined {
        return this['is_support_phoneme_en'];
    }
    public withIsSupportPhoneme(isSupportPhoneme: boolean): VoiceCapability {
        this['is_support_phoneme'] = isSupportPhoneme;
        return this;
    }
    public set isSupportPhoneme(isSupportPhoneme: boolean  | undefined) {
        this['is_support_phoneme'] = isSupportPhoneme;
    }
    public get isSupportPhoneme(): boolean | undefined {
        return this['is_support_phoneme'];
    }
    public withIsSupportBreakTime(isSupportBreakTime: boolean): VoiceCapability {
        this['is_support_break_time'] = isSupportBreakTime;
        return this;
    }
    public set isSupportBreakTime(isSupportBreakTime: boolean  | undefined) {
        this['is_support_break_time'] = isSupportBreakTime;
    }
    public get isSupportBreakTime(): boolean | undefined {
        return this['is_support_break_time'];
    }
    public withIsSupportBreakStrength(isSupportBreakStrength: boolean): VoiceCapability {
        this['is_support_break_strength'] = isSupportBreakStrength;
        return this;
    }
    public set isSupportBreakStrength(isSupportBreakStrength: boolean  | undefined) {
        this['is_support_break_strength'] = isSupportBreakStrength;
    }
    public get isSupportBreakStrength(): boolean | undefined {
        return this['is_support_break_strength'];
    }
    public withIsSupportSpeed(isSupportSpeed: boolean): VoiceCapability {
        this['is_support_speed'] = isSupportSpeed;
        return this;
    }
    public set isSupportSpeed(isSupportSpeed: boolean  | undefined) {
        this['is_support_speed'] = isSupportSpeed;
    }
    public get isSupportSpeed(): boolean | undefined {
        return this['is_support_speed'];
    }
    public withIsSupportProsody(isSupportProsody: boolean): VoiceCapability {
        this['is_support_prosody'] = isSupportProsody;
        return this;
    }
    public set isSupportProsody(isSupportProsody: boolean  | undefined) {
        this['is_support_prosody'] = isSupportProsody;
    }
    public get isSupportProsody(): boolean | undefined {
        return this['is_support_prosody'];
    }
    public withIsSupportSsmlSayAs(isSupportSsmlSayAs: boolean): VoiceCapability {
        this['is_support_ssml_say_as'] = isSupportSsmlSayAs;
        return this;
    }
    public set isSupportSsmlSayAs(isSupportSsmlSayAs: boolean  | undefined) {
        this['is_support_ssml_say_as'] = isSupportSsmlSayAs;
    }
    public get isSupportSsmlSayAs(): boolean | undefined {
        return this['is_support_ssml_say_as'];
    }
    public withIsSupportSsmlSub(isSupportSsmlSub: boolean): VoiceCapability {
        this['is_support_ssml_sub'] = isSupportSsmlSub;
        return this;
    }
    public set isSupportSsmlSub(isSupportSsmlSub: boolean  | undefined) {
        this['is_support_ssml_sub'] = isSupportSsmlSub;
    }
    public get isSupportSsmlSub(): boolean | undefined {
        return this['is_support_ssml_sub'];
    }
    public withIsSupportWord(isSupportWord: boolean): VoiceCapability {
        this['is_support_word'] = isSupportWord;
        return this;
    }
    public set isSupportWord(isSupportWord: boolean  | undefined) {
        this['is_support_word'] = isSupportWord;
    }
    public get isSupportWord(): boolean | undefined {
        return this['is_support_word'];
    }
    public withIsSupportVoiceCache(isSupportVoiceCache: boolean): VoiceCapability {
        this['is_support_voice_cache'] = isSupportVoiceCache;
        return this;
    }
    public set isSupportVoiceCache(isSupportVoiceCache: boolean  | undefined) {
        this['is_support_voice_cache'] = isSupportVoiceCache;
    }
    public get isSupportVoiceCache(): boolean | undefined {
        return this['is_support_voice_cache'];
    }
    public withConversionRate(conversionRate: number): VoiceCapability {
        this['conversion_rate'] = conversionRate;
        return this;
    }
    public set conversionRate(conversionRate: number  | undefined) {
        this['conversion_rate'] = conversionRate;
    }
    public get conversionRate(): number | undefined {
        return this['conversion_rate'];
    }
    public withConversionRateEn(conversionRateEn: number): VoiceCapability {
        this['conversion_rate_en'] = conversionRateEn;
        return this;
    }
    public set conversionRateEn(conversionRateEn: number  | undefined) {
        this['conversion_rate_en'] = conversionRateEn;
    }
    public get conversionRateEn(): number | undefined {
        return this['conversion_rate_en'];
    }
    public withIsSupportSrt(isSupportSrt: boolean): VoiceCapability {
        this['is_support_srt'] = isSupportSrt;
        return this;
    }
    public set isSupportSrt(isSupportSrt: boolean  | undefined) {
        this['is_support_srt'] = isSupportSrt;
    }
    public get isSupportSrt(): boolean | undefined {
        return this['is_support_srt'];
    }
}