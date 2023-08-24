

export class XimalayaVoiceAssetMeta {
    public domain?: string;
    private 'speaker_name'?: string;
    private 'speaker_variant'?: string;
    public constructor(domain?: string, speakerName?: string, speakerVariant?: string) { 
        this['domain'] = domain;
        this['speaker_name'] = speakerName;
        this['speaker_variant'] = speakerVariant;
    }
    public withDomain(domain: string): XimalayaVoiceAssetMeta {
        this['domain'] = domain;
        return this;
    }
    public withSpeakerName(speakerName: string): XimalayaVoiceAssetMeta {
        this['speaker_name'] = speakerName;
        return this;
    }
    public set speakerName(speakerName: string  | undefined) {
        this['speaker_name'] = speakerName;
    }
    public get speakerName(): string | undefined {
        return this['speaker_name'];
    }
    public withSpeakerVariant(speakerVariant: string): XimalayaVoiceAssetMeta {
        this['speaker_variant'] = speakerVariant;
        return this;
    }
    public set speakerVariant(speakerVariant: string  | undefined) {
        this['speaker_variant'] = speakerVariant;
    }
    public get speakerVariant(): string | undefined {
        return this['speaker_variant'];
    }
}