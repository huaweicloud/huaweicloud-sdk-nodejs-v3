

export class HistoryStreamInfo {
    public domain?: string;
    public app?: string;
    public stream?: string;
    public type?: number;
    private 'video_codec'?: string | undefined;
    private 'audio_codec'?: string | undefined;
    private 'client_ip'?: string | undefined;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    public constructor() { 
    }
    public withDomain(domain: string): HistoryStreamInfo {
        this['domain'] = domain;
        return this;
    }
    public withApp(app: string): HistoryStreamInfo {
        this['app'] = app;
        return this;
    }
    public withStream(stream: string): HistoryStreamInfo {
        this['stream'] = stream;
        return this;
    }
    public withType(type: number): HistoryStreamInfo {
        this['type'] = type;
        return this;
    }
    public withVideoCodec(videoCodec: string): HistoryStreamInfo {
        this['video_codec'] = videoCodec;
        return this;
    }
    public set videoCodec(videoCodec: string | undefined) {
        this['video_codec'] = videoCodec;
    }
    public get videoCodec() {
        return this['video_codec'];
    }
    public withAudioCodec(audioCodec: string): HistoryStreamInfo {
        this['audio_codec'] = audioCodec;
        return this;
    }
    public set audioCodec(audioCodec: string | undefined) {
        this['audio_codec'] = audioCodec;
    }
    public get audioCodec() {
        return this['audio_codec'];
    }
    public withClientIp(clientIp: string): HistoryStreamInfo {
        this['client_ip'] = clientIp;
        return this;
    }
    public set clientIp(clientIp: string | undefined) {
        this['client_ip'] = clientIp;
    }
    public get clientIp() {
        return this['client_ip'];
    }
    public withStartTime(startTime: string): HistoryStreamInfo {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): HistoryStreamInfo {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
}