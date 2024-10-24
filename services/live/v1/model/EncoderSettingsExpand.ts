import { EncoderSettingsExpandAudioDescriptions } from './EncoderSettingsExpandAudioDescriptions';


export class EncoderSettingsExpand {
    private 'audio_descriptions'?: Array<EncoderSettingsExpandAudioDescriptions>;
    public constructor() { 
    }
    public withAudioDescriptions(audioDescriptions: Array<EncoderSettingsExpandAudioDescriptions>): EncoderSettingsExpand {
        this['audio_descriptions'] = audioDescriptions;
        return this;
    }
    public set audioDescriptions(audioDescriptions: Array<EncoderSettingsExpandAudioDescriptions>  | undefined) {
        this['audio_descriptions'] = audioDescriptions;
    }
    public get audioDescriptions(): Array<EncoderSettingsExpandAudioDescriptions> | undefined {
        return this['audio_descriptions'];
    }
}