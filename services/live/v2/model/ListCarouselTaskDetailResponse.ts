
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCarouselTaskDetailResponse extends SdkResponse {
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'video_framerate_list'?: Array<number>;
    private 'video_bitrate_list'?: Array<number>;
    private 'audio_framerate_list'?: Array<number>;
    private 'audio_bitrate_list'?: Array<number>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withStartTime(startTime: string): ListCarouselTaskDetailResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListCarouselTaskDetailResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withVideoFramerateList(videoFramerateList: Array<number>): ListCarouselTaskDetailResponse {
        this['video_framerate_list'] = videoFramerateList;
        return this;
    }
    public set videoFramerateList(videoFramerateList: Array<number>  | undefined) {
        this['video_framerate_list'] = videoFramerateList;
    }
    public get videoFramerateList(): Array<number> | undefined {
        return this['video_framerate_list'];
    }
    public withVideoBitrateList(videoBitrateList: Array<number>): ListCarouselTaskDetailResponse {
        this['video_bitrate_list'] = videoBitrateList;
        return this;
    }
    public set videoBitrateList(videoBitrateList: Array<number>  | undefined) {
        this['video_bitrate_list'] = videoBitrateList;
    }
    public get videoBitrateList(): Array<number> | undefined {
        return this['video_bitrate_list'];
    }
    public withAudioFramerateList(audioFramerateList: Array<number>): ListCarouselTaskDetailResponse {
        this['audio_framerate_list'] = audioFramerateList;
        return this;
    }
    public set audioFramerateList(audioFramerateList: Array<number>  | undefined) {
        this['audio_framerate_list'] = audioFramerateList;
    }
    public get audioFramerateList(): Array<number> | undefined {
        return this['audio_framerate_list'];
    }
    public withAudioBitrateList(audioBitrateList: Array<number>): ListCarouselTaskDetailResponse {
        this['audio_bitrate_list'] = audioBitrateList;
        return this;
    }
    public set audioBitrateList(audioBitrateList: Array<number>  | undefined) {
        this['audio_bitrate_list'] = audioBitrateList;
    }
    public get audioBitrateList(): Array<number> | undefined {
        return this['audio_bitrate_list'];
    }
    public withXRequestId(xRequestId: string): ListCarouselTaskDetailResponse {
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