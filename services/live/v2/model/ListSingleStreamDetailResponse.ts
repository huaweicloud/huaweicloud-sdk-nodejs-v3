import { StreamDetail } from './StreamDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSingleStreamDetailResponse extends SdkResponse {
    private 'publish_domain'?: string | undefined;
    public app?: string;
    public stream?: string;
    private 'video_framerate'?: Array<StreamDetail> | undefined;
    private 'video_bitrate'?: Array<StreamDetail> | undefined;
    private 'audio_framerate'?: Array<StreamDetail> | undefined;
    private 'X-Request-Id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withPublishDomain(publishDomain: string): ListSingleStreamDetailResponse {
        this['publish_domain'] = publishDomain;
        return this;
    }
    public set publishDomain(publishDomain: string | undefined) {
        this['publish_domain'] = publishDomain;
    }
    public get publishDomain() {
        return this['publish_domain'];
    }
    public withApp(app: string): ListSingleStreamDetailResponse {
        this['app'] = app;
        return this;
    }
    public withStream(stream: string): ListSingleStreamDetailResponse {
        this['stream'] = stream;
        return this;
    }
    public withVideoFramerate(videoFramerate: Array<StreamDetail>): ListSingleStreamDetailResponse {
        this['video_framerate'] = videoFramerate;
        return this;
    }
    public set videoFramerate(videoFramerate: Array<StreamDetail> | undefined) {
        this['video_framerate'] = videoFramerate;
    }
    public get videoFramerate() {
        return this['video_framerate'];
    }
    public withVideoBitrate(videoBitrate: Array<StreamDetail>): ListSingleStreamDetailResponse {
        this['video_bitrate'] = videoBitrate;
        return this;
    }
    public set videoBitrate(videoBitrate: Array<StreamDetail> | undefined) {
        this['video_bitrate'] = videoBitrate;
    }
    public get videoBitrate() {
        return this['video_bitrate'];
    }
    public withAudioFramerate(audioFramerate: Array<StreamDetail>): ListSingleStreamDetailResponse {
        this['audio_framerate'] = audioFramerate;
        return this;
    }
    public set audioFramerate(audioFramerate: Array<StreamDetail> | undefined) {
        this['audio_framerate'] = audioFramerate;
    }
    public get audioFramerate() {
        return this['audio_framerate'];
    }
    public withXRequestId(xRequestId: string): ListSingleStreamDetailResponse {
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