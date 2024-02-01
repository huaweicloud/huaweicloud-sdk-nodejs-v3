

export class MobvoiVoiceAssetMeta {
    public speaker?: string;
    public constructor(speaker?: string) { 
        this['speaker'] = speaker;
    }
    public withSpeaker(speaker: string): MobvoiVoiceAssetMeta {
        this['speaker'] = speaker;
        return this;
    }
}