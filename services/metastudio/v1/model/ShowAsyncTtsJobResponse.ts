
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAsyncTtsJobResponse extends SdkResponse {
    public state?: string;
    private 'audio_file_url'?: string;
    private 'audio_info_file_url'?: string;
    public constructor() { 
        super();
    }
    public withState(state: string): ShowAsyncTtsJobResponse {
        this['state'] = state;
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
}