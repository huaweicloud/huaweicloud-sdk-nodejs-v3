import { VoiceConfig } from './VoiceConfig';


export class CoStreamerConfig {
    private 'voice_config'?: VoiceConfig;
    private 'streamer_action'?: CoStreamerConfigStreamerActionEnum | string;
    public constructor() { 
    }
    public withVoiceConfig(voiceConfig: VoiceConfig): CoStreamerConfig {
        this['voice_config'] = voiceConfig;
        return this;
    }
    public set voiceConfig(voiceConfig: VoiceConfig  | undefined) {
        this['voice_config'] = voiceConfig;
    }
    public get voiceConfig(): VoiceConfig | undefined {
        return this['voice_config'];
    }
    public withStreamerAction(streamerAction: CoStreamerConfigStreamerActionEnum | string): CoStreamerConfig {
        this['streamer_action'] = streamerAction;
        return this;
    }
    public set streamerAction(streamerAction: CoStreamerConfigStreamerActionEnum | string  | undefined) {
        this['streamer_action'] = streamerAction;
    }
    public get streamerAction(): CoStreamerConfigStreamerActionEnum | string | undefined {
        return this['streamer_action'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CoStreamerConfigStreamerActionEnum {
    SILENCE = 'SILENCE',
    VOLUME_DOWN = 'VOLUME_DOWN'
}
