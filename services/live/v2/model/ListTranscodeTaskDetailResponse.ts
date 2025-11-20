import { TranscodeDetailInfo } from './TranscodeDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTranscodeTaskDetailResponse extends SdkResponse {
    public domain?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'transcode_detail_list'?: Array<TranscodeDetailInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withDomain(domain: string): ListTranscodeTaskDetailResponse {
        this['domain'] = domain;
        return this;
    }
    public withStartTime(startTime: string): ListTranscodeTaskDetailResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListTranscodeTaskDetailResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withTranscodeDetailList(transcodeDetailList: Array<TranscodeDetailInfo>): ListTranscodeTaskDetailResponse {
        this['transcode_detail_list'] = transcodeDetailList;
        return this;
    }
    public set transcodeDetailList(transcodeDetailList: Array<TranscodeDetailInfo>  | undefined) {
        this['transcode_detail_list'] = transcodeDetailList;
    }
    public get transcodeDetailList(): Array<TranscodeDetailInfo> | undefined {
        return this['transcode_detail_list'];
    }
    public withXRequestId(xRequestId: string): ListTranscodeTaskDetailResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}