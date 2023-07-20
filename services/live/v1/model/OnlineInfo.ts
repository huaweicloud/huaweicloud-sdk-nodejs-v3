

export class OnlineInfo {
    private 'publish_domain'?: string;
    public app?: string;
    public stream?: string;
    private 'video_codec'?: OnlineInfoVideoCodecEnum | string;
    private 'audio_codec'?: OnlineInfoAudioCodecEnum | string;
    private 'video_frame_rate'?: number;
    private 'audio_frame_rate'?: number;
    private 'video_bitrate'?: number;
    private 'audio_bitrate'?: number;
    public resolution?: string;
    private 'client_ip'?: string;
    private 'start_time'?: string;
    public constructor(publishDomain?: string, app?: string, stream?: string, videoCodec?: string, audioCodec?: string, clientIp?: string, startTime?: string) { 
        this['publish_domain'] = publishDomain;
        this['app'] = app;
        this['stream'] = stream;
        this['video_codec'] = videoCodec;
        this['audio_codec'] = audioCodec;
        this['client_ip'] = clientIp;
        this['start_time'] = startTime;
    }
    public withPublishDomain(publishDomain: string): OnlineInfo {
        this['publish_domain'] = publishDomain;
        return this;
    }
    public set publishDomain(publishDomain: string  | undefined) {
        this['publish_domain'] = publishDomain;
    }
    public get publishDomain(): string | undefined {
        return this['publish_domain'];
    }
    public withApp(app: string): OnlineInfo {
        this['app'] = app;
        return this;
    }
    public withStream(stream: string): OnlineInfo {
        this['stream'] = stream;
        return this;
    }
    public withVideoCodec(videoCodec: OnlineInfoVideoCodecEnum | string): OnlineInfo {
        this['video_codec'] = videoCodec;
        return this;
    }
    public set videoCodec(videoCodec: OnlineInfoVideoCodecEnum | string  | undefined) {
        this['video_codec'] = videoCodec;
    }
    public get videoCodec(): OnlineInfoVideoCodecEnum | string | undefined {
        return this['video_codec'];
    }
    public withAudioCodec(audioCodec: OnlineInfoAudioCodecEnum | string): OnlineInfo {
        this['audio_codec'] = audioCodec;
        return this;
    }
    public set audioCodec(audioCodec: OnlineInfoAudioCodecEnum | string  | undefined) {
        this['audio_codec'] = audioCodec;
    }
    public get audioCodec(): OnlineInfoAudioCodecEnum | string | undefined {
        return this['audio_codec'];
    }
    public withVideoFrameRate(videoFrameRate: number): OnlineInfo {
        this['video_frame_rate'] = videoFrameRate;
        return this;
    }
    public set videoFrameRate(videoFrameRate: number  | undefined) {
        this['video_frame_rate'] = videoFrameRate;
    }
    public get videoFrameRate(): number | undefined {
        return this['video_frame_rate'];
    }
    public withAudioFrameRate(audioFrameRate: number): OnlineInfo {
        this['audio_frame_rate'] = audioFrameRate;
        return this;
    }
    public set audioFrameRate(audioFrameRate: number  | undefined) {
        this['audio_frame_rate'] = audioFrameRate;
    }
    public get audioFrameRate(): number | undefined {
        return this['audio_frame_rate'];
    }
    public withVideoBitrate(videoBitrate: number): OnlineInfo {
        this['video_bitrate'] = videoBitrate;
        return this;
    }
    public set videoBitrate(videoBitrate: number  | undefined) {
        this['video_bitrate'] = videoBitrate;
    }
    public get videoBitrate(): number | undefined {
        return this['video_bitrate'];
    }
    public withAudioBitrate(audioBitrate: number): OnlineInfo {
        this['audio_bitrate'] = audioBitrate;
        return this;
    }
    public set audioBitrate(audioBitrate: number  | undefined) {
        this['audio_bitrate'] = audioBitrate;
    }
    public get audioBitrate(): number | undefined {
        return this['audio_bitrate'];
    }
    public withResolution(resolution: string): OnlineInfo {
        this['resolution'] = resolution;
        return this;
    }
    public withClientIp(clientIp: string): OnlineInfo {
        this['client_ip'] = clientIp;
        return this;
    }
    public set clientIp(clientIp: string  | undefined) {
        this['client_ip'] = clientIp;
    }
    public get clientIp(): string | undefined {
        return this['client_ip'];
    }
    public withStartTime(startTime: string): OnlineInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum OnlineInfoVideoCodecEnum {
    H264 = 'H264',
    H265 = 'H265'
}
/**
    * @export
    * @enum {string}
    */
export enum OnlineInfoAudioCodecEnum {
    AAC = 'AAC'
}
