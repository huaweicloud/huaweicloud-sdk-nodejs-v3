

export class SubtitleFileInfo {
    private 'subtitle_file_download_url'?: string;
    private 'subtitle_file_upload_url'?: string;
    private 'subtitle_file_state'?: SubtitleFileInfoSubtitleFileStateEnum | string;
    private 'job_id'?: string;
    public constructor() { 
    }
    public withSubtitleFileDownloadUrl(subtitleFileDownloadUrl: string): SubtitleFileInfo {
        this['subtitle_file_download_url'] = subtitleFileDownloadUrl;
        return this;
    }
    public set subtitleFileDownloadUrl(subtitleFileDownloadUrl: string  | undefined) {
        this['subtitle_file_download_url'] = subtitleFileDownloadUrl;
    }
    public get subtitleFileDownloadUrl(): string | undefined {
        return this['subtitle_file_download_url'];
    }
    public withSubtitleFileUploadUrl(subtitleFileUploadUrl: string): SubtitleFileInfo {
        this['subtitle_file_upload_url'] = subtitleFileUploadUrl;
        return this;
    }
    public set subtitleFileUploadUrl(subtitleFileUploadUrl: string  | undefined) {
        this['subtitle_file_upload_url'] = subtitleFileUploadUrl;
    }
    public get subtitleFileUploadUrl(): string | undefined {
        return this['subtitle_file_upload_url'];
    }
    public withSubtitleFileState(subtitleFileState: SubtitleFileInfoSubtitleFileStateEnum | string): SubtitleFileInfo {
        this['subtitle_file_state'] = subtitleFileState;
        return this;
    }
    public set subtitleFileState(subtitleFileState: SubtitleFileInfoSubtitleFileStateEnum | string  | undefined) {
        this['subtitle_file_state'] = subtitleFileState;
    }
    public get subtitleFileState(): SubtitleFileInfoSubtitleFileStateEnum | string | undefined {
        return this['subtitle_file_state'];
    }
    public withJobId(jobId: string): SubtitleFileInfo {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SubtitleFileInfoSubtitleFileStateEnum {
    GENERATE_SUCCEED = 'GENERATE_SUCCEED',
    GENERATE_FAILED = 'GENERATE_FAILED',
    GENERATING = 'GENERATING'
}
