

export class RegisterVoiceReqConfig {
    private 'voice_name'?: string;
    public language?: string;
    public constructor(voiceName?: string) { 
        this['voice_name'] = voiceName;
    }
    public withVoiceName(voiceName: string): RegisterVoiceReqConfig {
        this['voice_name'] = voiceName;
        return this;
    }
    public set voiceName(voiceName: string  | undefined) {
        this['voice_name'] = voiceName;
    }
    public get voiceName(): string | undefined {
        return this['voice_name'];
    }
    public withLanguage(language: string): RegisterVoiceReqConfig {
        this['language'] = language;
        return this;
    }
}