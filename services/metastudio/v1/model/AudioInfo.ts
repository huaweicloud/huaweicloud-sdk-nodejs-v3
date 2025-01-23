

export class AudioInfo {
    private 'audio_id'?: number;
    public constructor() { 
    }
    public withAudioId(audioId: number): AudioInfo {
        this['audio_id'] = audioId;
        return this;
    }
    public set audioId(audioId: number  | undefined) {
        this['audio_id'] = audioId;
    }
    public get audioId(): number | undefined {
        return this['audio_id'];
    }
}