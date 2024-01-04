

export class CreateTtsAuditionRequestBody {
    public text?: string;
    public emotion?: string;
    public speed?: number;
    public pitch?: number;
    public volume?: number;
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
}