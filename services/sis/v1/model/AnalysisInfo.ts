

export class AnalysisInfo {
    public diarization?: boolean;
    public channel?: AnalysisInfoChannelEnum;
    public emotion?: boolean;
    public speed?: boolean;
    public constructor() { 
    }
    public withDiarization(diarization: boolean): AnalysisInfo {
        this['diarization'] = diarization;
        return this;
    }
    public withChannel(channel: AnalysisInfoChannelEnum): AnalysisInfo {
        this['channel'] = channel;
        return this;
    }
    public withEmotion(emotion: boolean): AnalysisInfo {
        this['emotion'] = emotion;
        return this;
    }
    public withSpeed(speed: boolean): AnalysisInfo {
        this['speed'] = speed;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AnalysisInfoChannelEnum {
    MONO = 'MONO',
    LEFT_AGENT = 'LEFT_AGENT',
    RIGHT_AGENT = 'RIGHT_AGENT'
}
