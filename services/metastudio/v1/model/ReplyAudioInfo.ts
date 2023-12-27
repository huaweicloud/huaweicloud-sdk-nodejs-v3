

export class ReplyAudioInfo {
    private 'audio_url'?: string;
    private 'audio_name'?: string;
    public constructor() { 
    }
    public withAudioUrl(audioUrl: string): ReplyAudioInfo {
        this['audio_url'] = audioUrl;
        return this;
    }
    public set audioUrl(audioUrl: string  | undefined) {
        this['audio_url'] = audioUrl;
    }
    public get audioUrl(): string | undefined {
        return this['audio_url'];
    }
    public withAudioName(audioName: string): ReplyAudioInfo {
        this['audio_name'] = audioName;
        return this;
    }
    public set audioName(audioName: string  | undefined) {
        this['audio_name'] = audioName;
    }
    public get audioName(): string | undefined {
        return this['audio_name'];
    }
}