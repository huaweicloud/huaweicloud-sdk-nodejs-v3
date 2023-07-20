import { TranscodeData } from './TranscodeData';
import { TranscodeSummary } from './TranscodeSummary';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTranscodeDataResponse extends SdkResponse {
    private 'transcode_data_list'?: Array<TranscodeData>;
    private 'summary_list'?: Array<TranscodeSummary>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withTranscodeDataList(transcodeDataList: Array<TranscodeData>): ListTranscodeDataResponse {
        this['transcode_data_list'] = transcodeDataList;
        return this;
    }
    public set transcodeDataList(transcodeDataList: Array<TranscodeData>  | undefined) {
        this['transcode_data_list'] = transcodeDataList;
    }
    public get transcodeDataList(): Array<TranscodeData> | undefined {
        return this['transcode_data_list'];
    }
    public withSummaryList(summaryList: Array<TranscodeSummary>): ListTranscodeDataResponse {
        this['summary_list'] = summaryList;
        return this;
    }
    public set summaryList(summaryList: Array<TranscodeSummary>  | undefined) {
        this['summary_list'] = summaryList;
    }
    public get summaryList(): Array<TranscodeSummary> | undefined {
        return this['summary_list'];
    }
    public withXRequestId(xRequestId: string): ListTranscodeDataResponse {
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