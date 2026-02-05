

export class VoiceListResultVoices {
    private 'voice_name'?: string;
    public language?: string;
    public constructor() { 
    }
    public withVoiceName(voiceName: string): VoiceListResultVoices {
        this['voice_name'] = voiceName;
        return this;
    }
    public set voiceName(voiceName: string  | undefined) {
        this['voice_name'] = voiceName;
    }
    public get voiceName(): string | undefined {
        return this['voice_name'];
    }
    public withLanguage(language: string): VoiceListResultVoices {
        this['language'] = language;
        return this;
    }
}