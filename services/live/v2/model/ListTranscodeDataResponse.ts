import { TranscodeData } from './TranscodeData';
import { TranscodeSummary } from './TranscodeSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTranscodeDataResponse extends SdkResponse {
    private 'transcode_data_list'?: Array<TranscodeData> | undefined;
    private 'summary_list'?: Array<TranscodeSummary> | undefined;
    private 'X-Request-Id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withTranscodeDataList(transcodeDataList: Array<TranscodeData>): ListTranscodeDataResponse {
        this['transcode_data_list'] = transcodeDataList;
        return this;
    }
    public set transcodeDataList(transcodeDataList: Array<TranscodeData> | undefined) {
        this['transcode_data_list'] = transcodeDataList;
    }
    public get transcodeDataList() {
        return this['transcode_data_list'];
    }
    public withSummaryList(summaryList: Array<TranscodeSummary>): ListTranscodeDataResponse {
        this['summary_list'] = summaryList;
        return this;
    }
    public set summaryList(summaryList: Array<TranscodeSummary> | undefined) {
        this['summary_list'] = summaryList;
    }
    public get summaryList() {
        return this['summary_list'];
    }
    public withXRequestId(xRequestId: string): ListTranscodeDataResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-Request-Id'];
    }
}