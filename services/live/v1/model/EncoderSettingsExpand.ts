import { EncoderSettingsExpandAudioDescriptions } from './EncoderSettingsExpandAudioDescriptions';
import { VideoDescriptions } from './VideoDescriptions';


export class EncoderSettingsExpand {
    private 'audio_descriptions'?: Array<EncoderSettingsExpandAudioDescriptions>;
    private 'video_descriptions'?: VideoDescriptions;
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
    public withVideoDescriptions(videoDescriptions: VideoDescriptions): EncoderSettingsExpand {
        this['video_descriptions'] = videoDescriptions;
        return this;
    }
    public set videoDescriptions(videoDescriptions: VideoDescriptions  | undefined) {
        this['video_descriptions'] = videoDescriptions;
    }
    public get videoDescriptions(): VideoDescriptions | undefined {
        return this['video_descriptions'];
    }
}