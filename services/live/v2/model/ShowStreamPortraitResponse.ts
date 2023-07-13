import { StreamPortrait } from './StreamPortrait';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowStreamPortraitResponse extends SdkResponse {
    private 'stream_portraits'?: Array<StreamPortrait> | undefined;
    private 'X-Request-Id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withStreamPortraits(streamPortraits: Array<StreamPortrait>): ShowStreamPortraitResponse {
        this['stream_portraits'] = streamPortraits;
        return this;
    }
    public set streamPortraits(streamPortraits: Array<StreamPortrait> | undefined) {
        this['stream_portraits'] = streamPortraits;
    }
    public get streamPortraits() {
        return this['stream_portraits'];
    }
    public withXRequestId(xRequestId: string): ShowStreamPortraitResponse {
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