
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAsyncTtsJobResponse extends SdkResponse {
    public state?: string;
    public code?: string;
    public message?: string;
    private 'audio_file_url'?: string;
    private 'audio_info_file_url'?: string;
    private 'audio_srt_file_url'?: string;
    private 'audio_action_file_url'?: string;
    public constructor() { 
        super();
    }
    public withState(state: string): ShowAsyncTtsJobResponse {
        this['state'] = state;
        return this;
    }
    public withCode(code: string): ShowAsyncTtsJobResponse {
        this['code'] = code;
        return this;
    }
    public withMessage(message: string): ShowAsyncTtsJobResponse {
        this['message'] = message;
        return this;
    }
    public withAudioFileUrl(audioFileUrl: string): ShowAsyncTtsJobResponse {
        this['audio_file_url'] = audioFileUrl;
        return this;
    }
    public set audioFileUrl(audioFileUrl: string  | undefined) {
        this['audio_file_url'] = audioFileUrl;
    }
    public get audioFileUrl(): string | undefined {
        return this['audio_file_url'];
    }
    public withAudioInfoFileUrl(audioInfoFileUrl: string): ShowAsyncTtsJobResponse {
        this['audio_info_file_url'] = audioInfoFileUrl;
        return this;
    }
    public set audioInfoFileUrl(audioInfoFileUrl: string  | undefined) {
        this['audio_info_file_url'] = audioInfoFileUrl;
    }
    public get audioInfoFileUrl(): string | undefined {
        return this['audio_info_file_url'];
    }
    public withAudioSrtFileUrl(audioSrtFileUrl: string): ShowAsyncTtsJobResponse {
        this['audio_srt_file_url'] = audioSrtFileUrl;
        return this;
    }
    public set audioSrtFileUrl(audioSrtFileUrl: string  | undefined) {
        this['audio_srt_file_url'] = audioSrtFileUrl;
    }
    public get audioSrtFileUrl(): string | undefined {
        return this['audio_srt_file_url'];
    }
    public withAudioActionFileUrl(audioActionFileUrl: string): ShowAsyncTtsJobResponse {
        this['audio_action_file_url'] = audioActionFileUrl;
        return this;
    }
    public set audioActionFileUrl(audioActionFileUrl: string  | undefined) {
        this['audio_action_file_url'] = audioActionFileUrl;
    }
    public get audioActionFileUrl(): string | undefined {
        return this['audio_action_file_url'];
    }
}