

export class CreateFASReq {
    private 'audio_file_download_url'?: string;
    private 'frame_rate'?: number;
    public constructor(audioFileDownloadUrl?: string, frameRate?: number) { 
        this['audio_file_download_url'] = audioFileDownloadUrl;
        this['frame_rate'] = frameRate;
    }
    public withAudioFileDownloadUrl(audioFileDownloadUrl: string): CreateFASReq {
        this['audio_file_download_url'] = audioFileDownloadUrl;
        return this;
    }
    public set audioFileDownloadUrl(audioFileDownloadUrl: string  | undefined) {
        this['audio_file_download_url'] = audioFileDownloadUrl;
    }
    public get audioFileDownloadUrl(): string | undefined {
        return this['audio_file_download_url'];
    }
    public withFrameRate(frameRate: number): CreateFASReq {
        this['frame_rate'] = frameRate;
        return this;
    }
    public set frameRate(frameRate: number  | undefined) {
        this['frame_rate'] = frameRate;
    }
    public get frameRate(): number | undefined {
        return this['frame_rate'];
    }
}