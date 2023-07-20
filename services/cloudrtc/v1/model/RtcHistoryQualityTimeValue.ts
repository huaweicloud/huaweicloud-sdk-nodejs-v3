

export class RtcHistoryQualityTimeValue {
    public date?: string;
    private 'join_success_rate'?: number;
    private 'join_success_in5secs_rate'?: number;
    private 'video_freeze_rate'?: number;
    private 'audio_freeze_rate'?: number;
    private 'first_video_recv_time'?: number;
    private 'first_audio_recv_time'?: number;
    private 'pull_stream_success_rate'?: number;
    private 'push_stream_success_rate'?: number;
    private 'video_upstream_excellent_trans_rate'?: number;
    private 'audio_upstream_excellent_trans_rate'?: number;
    private 'video_excellent_trans_rate'?: number;
    private 'audio_excellent_trans_rate'?: number;
    private 'video_trans_delay'?: number;
    private 'audio_trans_delay'?: number;
    public constructor() { 
    }
    public withDate(date: string): RtcHistoryQualityTimeValue {
        this['date'] = date;
        return this;
    }
    public withJoinSuccessRate(joinSuccessRate: number): RtcHistoryQualityTimeValue {
        this['join_success_rate'] = joinSuccessRate;
        return this;
    }
    public set joinSuccessRate(joinSuccessRate: number  | undefined) {
        this['join_success_rate'] = joinSuccessRate;
    }
    public get joinSuccessRate(): number | undefined {
        return this['join_success_rate'];
    }
    public withJoinSuccessIn5secsRate(joinSuccessIn5secsRate: number): RtcHistoryQualityTimeValue {
        this['join_success_in5secs_rate'] = joinSuccessIn5secsRate;
        return this;
    }
    public set joinSuccessIn5secsRate(joinSuccessIn5secsRate: number  | undefined) {
        this['join_success_in5secs_rate'] = joinSuccessIn5secsRate;
    }
    public get joinSuccessIn5secsRate(): number | undefined {
        return this['join_success_in5secs_rate'];
    }
    public withVideoFreezeRate(videoFreezeRate: number): RtcHistoryQualityTimeValue {
        this['video_freeze_rate'] = videoFreezeRate;
        return this;
    }
    public set videoFreezeRate(videoFreezeRate: number  | undefined) {
        this['video_freeze_rate'] = videoFreezeRate;
    }
    public get videoFreezeRate(): number | undefined {
        return this['video_freeze_rate'];
    }
    public withAudioFreezeRate(audioFreezeRate: number): RtcHistoryQualityTimeValue {
        this['audio_freeze_rate'] = audioFreezeRate;
        return this;
    }
    public set audioFreezeRate(audioFreezeRate: number  | undefined) {
        this['audio_freeze_rate'] = audioFreezeRate;
    }
    public get audioFreezeRate(): number | undefined {
        return this['audio_freeze_rate'];
    }
    public withFirstVideoRecvTime(firstVideoRecvTime: number): RtcHistoryQualityTimeValue {
        this['first_video_recv_time'] = firstVideoRecvTime;
        return this;
    }
    public set firstVideoRecvTime(firstVideoRecvTime: number  | undefined) {
        this['first_video_recv_time'] = firstVideoRecvTime;
    }
    public get firstVideoRecvTime(): number | undefined {
        return this['first_video_recv_time'];
    }
    public withFirstAudioRecvTime(firstAudioRecvTime: number): RtcHistoryQualityTimeValue {
        this['first_audio_recv_time'] = firstAudioRecvTime;
        return this;
    }
    public set firstAudioRecvTime(firstAudioRecvTime: number  | undefined) {
        this['first_audio_recv_time'] = firstAudioRecvTime;
    }
    public get firstAudioRecvTime(): number | undefined {
        return this['first_audio_recv_time'];
    }
    public withPullStreamSuccessRate(pullStreamSuccessRate: number): RtcHistoryQualityTimeValue {
        this['pull_stream_success_rate'] = pullStreamSuccessRate;
        return this;
    }
    public set pullStreamSuccessRate(pullStreamSuccessRate: number  | undefined) {
        this['pull_stream_success_rate'] = pullStreamSuccessRate;
    }
    public get pullStreamSuccessRate(): number | undefined {
        return this['pull_stream_success_rate'];
    }
    public withPushStreamSuccessRate(pushStreamSuccessRate: number): RtcHistoryQualityTimeValue {
        this['push_stream_success_rate'] = pushStreamSuccessRate;
        return this;
    }
    public set pushStreamSuccessRate(pushStreamSuccessRate: number  | undefined) {
        this['push_stream_success_rate'] = pushStreamSuccessRate;
    }
    public get pushStreamSuccessRate(): number | undefined {
        return this['push_stream_success_rate'];
    }
    public withVideoUpstreamExcellentTransRate(videoUpstreamExcellentTransRate: number): RtcHistoryQualityTimeValue {
        this['video_upstream_excellent_trans_rate'] = videoUpstreamExcellentTransRate;
        return this;
    }
    public set videoUpstreamExcellentTransRate(videoUpstreamExcellentTransRate: number  | undefined) {
        this['video_upstream_excellent_trans_rate'] = videoUpstreamExcellentTransRate;
    }
    public get videoUpstreamExcellentTransRate(): number | undefined {
        return this['video_upstream_excellent_trans_rate'];
    }
    public withAudioUpstreamExcellentTransRate(audioUpstreamExcellentTransRate: number): RtcHistoryQualityTimeValue {
        this['audio_upstream_excellent_trans_rate'] = audioUpstreamExcellentTransRate;
        return this;
    }
    public set audioUpstreamExcellentTransRate(audioUpstreamExcellentTransRate: number  | undefined) {
        this['audio_upstream_excellent_trans_rate'] = audioUpstreamExcellentTransRate;
    }
    public get audioUpstreamExcellentTransRate(): number | undefined {
        return this['audio_upstream_excellent_trans_rate'];
    }
    public withVideoExcellentTransRate(videoExcellentTransRate: number): RtcHistoryQualityTimeValue {
        this['video_excellent_trans_rate'] = videoExcellentTransRate;
        return this;
    }
    public set videoExcellentTransRate(videoExcellentTransRate: number  | undefined) {
        this['video_excellent_trans_rate'] = videoExcellentTransRate;
    }
    public get videoExcellentTransRate(): number | undefined {
        return this['video_excellent_trans_rate'];
    }
    public withAudioExcellentTransRate(audioExcellentTransRate: number): RtcHistoryQualityTimeValue {
        this['audio_excellent_trans_rate'] = audioExcellentTransRate;
        return this;
    }
    public set audioExcellentTransRate(audioExcellentTransRate: number  | undefined) {
        this['audio_excellent_trans_rate'] = audioExcellentTransRate;
    }
    public get audioExcellentTransRate(): number | undefined {
        return this['audio_excellent_trans_rate'];
    }
    public withVideoTransDelay(videoTransDelay: number): RtcHistoryQualityTimeValue {
        this['video_trans_delay'] = videoTransDelay;
        return this;
    }
    public set videoTransDelay(videoTransDelay: number  | undefined) {
        this['video_trans_delay'] = videoTransDelay;
    }
    public get videoTransDelay(): number | undefined {
        return this['video_trans_delay'];
    }
    public withAudioTransDelay(audioTransDelay: number): RtcHistoryQualityTimeValue {
        this['audio_trans_delay'] = audioTransDelay;
        return this;
    }
    public set audioTransDelay(audioTransDelay: number  | undefined) {
        this['audio_trans_delay'] = audioTransDelay;
    }
    public get audioTransDelay(): number | undefined {
        return this['audio_trans_delay'];
    }
}