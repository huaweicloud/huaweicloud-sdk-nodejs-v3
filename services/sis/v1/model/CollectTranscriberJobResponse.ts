import { Segment } from './Segment';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CollectTranscriberJobResponse extends SdkResponse {
    public status?: string;
    private 'create_time'?: string | undefined;
    private 'start_time'?: string | undefined;
    private 'finish_time'?: string | undefined;
    public segments?: Array<Segment>;
    private 'audio_duration'?: number | undefined;
    public constructor() { 
        super();
    }
    public withStatus(status: string): CollectTranscriberJobResponse {
        this['status'] = status;
        return this;
    }
    public withCreateTime(createTime: string): CollectTranscriberJobResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withStartTime(startTime: string): CollectTranscriberJobResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withFinishTime(finishTime: string): CollectTranscriberJobResponse {
        this['finish_time'] = finishTime;
        return this;
    }
    public set finishTime(finishTime: string | undefined) {
        this['finish_time'] = finishTime;
    }
    public get finishTime() {
        return this['finish_time'];
    }
    public withSegments(segments: Array<Segment>): CollectTranscriberJobResponse {
        this['segments'] = segments;
        return this;
    }
    public withAudioDuration(audioDuration: number): CollectTranscriberJobResponse {
        this['audio_duration'] = audioDuration;
        return this;
    }
    public set audioDuration(audioDuration: number | undefined) {
        this['audio_duration'] = audioDuration;
    }
    public get audioDuration() {
        return this['audio_duration'];
    }
}