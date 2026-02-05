

export class RegisterVoiceResponseBodyResult {
    private 'voice_name'?: string;
    public constructor() { 
    }
    public withVoiceName(voiceName: string): RegisterVoiceResponseBodyResult {
        this['voice_name'] = voiceName;
        return this;
    }
    public set voiceName(voiceName: string  | undefined) {
        this['voice_name'] = voiceName;
    }
    public get voiceName(): string | undefined {
        return this['voice_name'];
    }
}