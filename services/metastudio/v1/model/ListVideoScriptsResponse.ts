import { VideoScriptBaseInfo } from './VideoScriptBaseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVideoScriptsResponse extends SdkResponse {
    public count?: number;
    private 'video_scripts'?: Array<VideoScriptBaseInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListVideoScriptsResponse {
        this['count'] = count;
        return this;
    }
    public withVideoScripts(videoScripts: Array<VideoScriptBaseInfo>): ListVideoScriptsResponse {
        this['video_scripts'] = videoScripts;
        return this;
    }
    public set videoScripts(videoScripts: Array<VideoScriptBaseInfo>  | undefined) {
        this['video_scripts'] = videoScripts;
    }
    public get videoScripts(): Array<VideoScriptBaseInfo> | undefined {
        return this['video_scripts'];
    }
    public withXRequestId(xRequestId: string): ListVideoScriptsResponse {
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