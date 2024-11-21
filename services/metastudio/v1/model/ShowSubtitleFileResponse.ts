import { SubtitleFileDetail } from './SubtitleFileDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSubtitleFileResponse extends SdkResponse {
    private 'job_state'?: string;
    private 'subtitle_file_info'?: Array<SubtitleFileDetail>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withJobState(jobState: string): ShowSubtitleFileResponse {
        this['job_state'] = jobState;
        return this;
    }
    public set jobState(jobState: string  | undefined) {
        this['job_state'] = jobState;
    }
    public get jobState(): string | undefined {
        return this['job_state'];
    }
    public withSubtitleFileInfo(subtitleFileInfo: Array<SubtitleFileDetail>): ShowSubtitleFileResponse {
        this['subtitle_file_info'] = subtitleFileInfo;
        return this;
    }
    public set subtitleFileInfo(subtitleFileInfo: Array<SubtitleFileDetail>  | undefined) {
        this['subtitle_file_info'] = subtitleFileInfo;
    }
    public get subtitleFileInfo(): Array<SubtitleFileDetail> | undefined {
        return this['subtitle_file_info'];
    }
    public withXRequestId(xRequestId: string): ShowSubtitleFileResponse {
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