

export class CreateTtsAuditionRequestBody {
    public text?: string;
    public emotion?: string;
    public speed?: number;
    public pitch?: number;
    public volume?: number;
    private 'business_type'?: string;
    public constructor(text?: string, emotion?: string) { 
        this['text'] = text;
        this['emotion'] = emotion;
    }
    public withText(text: string): CreateTtsAuditionRequestBody {
        this['text'] = text;
        return this;
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
}