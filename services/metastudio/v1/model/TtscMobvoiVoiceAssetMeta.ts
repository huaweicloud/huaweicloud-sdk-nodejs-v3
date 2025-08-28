

export class TtscMobvoiVoiceAssetMeta {
    public speaker?: string;
    public constructor(speaker?: string) { 
        this['speaker'] = speaker;
    }
    public withSpeaker(speaker: string): TtscMobvoiVoiceAssetMeta {
        this['speaker'] = speaker;
        return this;
    }
}