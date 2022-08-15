import { FlashResult } from './FlashResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeFlashAsrResponse extends SdkResponse {
    private 'trace_id'?: string | undefined;
    private 'audio_duration'?: number | undefined;
    private 'flash_result'?: Array<FlashResult> | undefined;
    public constructor() { 
        super();
    }
    public withTraceId(traceId: string): RecognizeFlashAsrResponse {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId() {
        return this['trace_id'];
    }
    public withAudioDuration(audioDuration: number): RecognizeFlashAsrResponse {
        this['audio_duration'] = audioDuration;
        return this;
    }
    public set audioDuration(audioDuration: number | undefined) {
        this['audio_duration'] = audioDuration;
    }
    public get audioDuration() {
        return this['audio_duration'];
    }
    public withFlashResult(flashResult: Array<FlashResult>): RecognizeFlashAsrResponse {
        this['flash_result'] = flashResult;
        return this;
    }
    public set flashResult(flashResult: Array<FlashResult> | undefined) {
        this['flash_result'] = flashResult;
    }
    public get flashResult() {
        return this['flash_result'];
    }
}