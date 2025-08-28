

export class TtscAudioxVoiceAssetMeta {
    public speaker?: string;
    public constructor(speaker?: string) { 
        this['speaker'] = speaker;
    }
    public withSpeaker(speaker: string): TtscAudioxVoiceAssetMeta {
        this['speaker'] = speaker;
        return this;
    }
}