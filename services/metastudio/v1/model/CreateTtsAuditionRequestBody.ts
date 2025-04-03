

export class CreateTtsAuditionRequestBody {
    public text?: string;
    private 'tts_text'?: string;
    public emotion?: string;
    public speed?: number;
    public pitch?: number;
    public volume?: number;
    private 'business_type'?: string;
    public style?: string;
    public channels?: number;
    private 'is_vocabulary_config_enable'?: boolean;
    public constructor(text?: string, emotion?: string) { 
        this['text'] = text;
        this['emotion'] = emotion;
    }
    public withText(text: string): CreateTtsAuditionRequestBody {
        this['text'] = text;
        return this;
    }
    public withTtsText(ttsText: string): CreateTtsAuditionRequestBody {
        this['tts_text'] = ttsText;
        return this;
    }
    public set ttsText(ttsText: string  | undefined) {
        this['tts_text'] = ttsText;
    }
    public get ttsText(): string | undefined {
        return this['tts_text'];
    }
    public withEmotion(emotion: string): CreateTtsAuditionRequestBody {
        this['emotion'] = emotion;
        return this;
    }
    public withSpeed(speed: number): CreateTtsAuditionRequestBody {
        this['speed'] = speed;
        return this;
    }
    public withPitch(pitch: number): CreateTtsAuditionRequestBody {
        this['pitch'] = pitch;
        return this;
    }
    public withVolume(volume: number): CreateTtsAuditionRequestBody {
        this['volume'] = volume;
        return this;
    }
    public withBusinessType(businessType: string): CreateTtsAuditionRequestBody {
        this['business_type'] = businessType;
        return this;
    }
    public set businessType(businessType: string  | undefined) {
        this['business_type'] = businessType;
    }
    public get businessType(): string | undefined {
        return this['business_type'];
    }
    public withStyle(style: string): CreateTtsAuditionRequestBody {
        this['style'] = style;
        return this;
    }
    public withChannels(channels: number): CreateTtsAuditionRequestBody {
        this['channels'] = channels;
        return this;
    }
    public withIsVocabularyConfigEnable(isVocabularyConfigEnable: boolean): CreateTtsAuditionRequestBody {
        this['is_vocabulary_config_enable'] = isVocabularyConfigEnable;
        return this;
    }
    public set isVocabularyConfigEnable(isVocabularyConfigEnable: boolean  | undefined) {
        this['is_vocabulary_config_enable'] = isVocabularyConfigEnable;
    }
    public get isVocabularyConfigEnable(): boolean | undefined {
        return this['is_vocabulary_config_enable'];
    }
}