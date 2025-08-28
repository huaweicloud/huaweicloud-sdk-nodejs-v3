import { TtsJobFile } from './TtsJobFile';


export class TtsJobDetail {
    private 'job_id'?: string;
    private 'websocket_job_id'?: string;
    private 'asset_id'?: string;
    private 'tts_service_enum'?: string;
    private 'text_length'?: number;
    private 'create_time'?: string;
    private 'audio_format'?: string;
    private 'need_timestamp'?: boolean;
    private 'gen_srt'?: boolean;
    private 'job_type'?: string;
    private 'job_state'?: string;
    private 'fail_msg'?: string;
    public files?: Array<TtsJobFile>;
    public constructor() { 
    }
    public withJobId(jobId: string): TtsJobDetail {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withWebsocketJobId(websocketJobId: string): TtsJobDetail {
        this['websocket_job_id'] = websocketJobId;
        return this;
    }
    public set websocketJobId(websocketJobId: string  | undefined) {
        this['websocket_job_id'] = websocketJobId;
    }
    public get websocketJobId(): string | undefined {
        return this['websocket_job_id'];
    }
    public withAssetId(assetId: string): TtsJobDetail {
        this['asset_id'] = assetId;
        return this;
    }
    public set assetId(assetId: string  | undefined) {
        this['asset_id'] = assetId;
    }
    public get assetId(): string | undefined {
        return this['asset_id'];
    }
    public withTtsServiceEnum(ttsServiceEnum: string): TtsJobDetail {
        this['tts_service_enum'] = ttsServiceEnum;
        return this;
    }
    public set ttsServiceEnum(ttsServiceEnum: string  | undefined) {
        this['tts_service_enum'] = ttsServiceEnum;
    }
    public get ttsServiceEnum(): string | undefined {
        return this['tts_service_enum'];
    }
    public withTextLength(textLength: number): TtsJobDetail {
        this['text_length'] = textLength;
        return this;
    }
    public set textLength(textLength: number  | undefined) {
        this['text_length'] = textLength;
    }
    public get textLength(): number | undefined {
        return this['text_length'];
    }
    public withCreateTime(createTime: string): TtsJobDetail {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withAudioFormat(audioFormat: string): TtsJobDetail {
        this['audio_format'] = audioFormat;
        return this;
    }
    public set audioFormat(audioFormat: string  | undefined) {
        this['audio_format'] = audioFormat;
    }
    public get audioFormat(): string | undefined {
        return this['audio_format'];
    }
    public withNeedTimestamp(needTimestamp: boolean): TtsJobDetail {
        this['need_timestamp'] = needTimestamp;
        return this;
    }
    public set needTimestamp(needTimestamp: boolean  | undefined) {
        this['need_timestamp'] = needTimestamp;
    }
    public get needTimestamp(): boolean | undefined {
        return this['need_timestamp'];
    }
    public withGenSrt(genSrt: boolean): TtsJobDetail {
        this['gen_srt'] = genSrt;
        return this;
    }
    public set genSrt(genSrt: boolean  | undefined) {
        this['gen_srt'] = genSrt;
    }
    public get genSrt(): boolean | undefined {
        return this['gen_srt'];
    }
    public withJobType(jobType: string): TtsJobDetail {
        this['job_type'] = jobType;
        return this;
    }
    public set jobType(jobType: string  | undefined) {
        this['job_type'] = jobType;
    }
    public get jobType(): string | undefined {
        return this['job_type'];
    }
    public withJobState(jobState: string): TtsJobDetail {
        this['job_state'] = jobState;
        return this;
    }
    public set jobState(jobState: string  | undefined) {
        this['job_state'] = jobState;
    }
    public get jobState(): string | undefined {
        return this['job_state'];
    }
    public withFailMsg(failMsg: string): TtsJobDetail {
        this['fail_msg'] = failMsg;
        return this;
    }
    public set failMsg(failMsg: string  | undefined) {
        this['fail_msg'] = failMsg;
    }
    public get failMsg(): string | undefined {
        return this['fail_msg'];
    }
    public withFiles(files: Array<TtsJobFile>): TtsJobDetail {
        this['files'] = files;
        return this;
    }
}