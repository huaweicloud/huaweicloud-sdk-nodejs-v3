

export class SubtitleFileDetail {
    private 'sequence_no'?: number;
    private 'subtitle_file_state'?: SubtitleFileDetailSubtitleFileStateEnum | string;
    private 'subtitle_file_download_url'?: string;
    private 'subtitle_file_upload_url'?: string;
    private 'generate_time'?: string;
    public constructor() { 
    }
    public withSequenceNo(sequenceNo: number): SubtitleFileDetail {
        this['sequence_no'] = sequenceNo;
        return this;
    }
    public set sequenceNo(sequenceNo: number  | undefined) {
        this['sequence_no'] = sequenceNo;
    }
    public get sequenceNo(): number | undefined {
        return this['sequence_no'];
    }
    public withSubtitleFileState(subtitleFileState: SubtitleFileDetailSubtitleFileStateEnum | string): SubtitleFileDetail {
        this['subtitle_file_state'] = subtitleFileState;
        return this;
    }
    public set subtitleFileState(subtitleFileState: SubtitleFileDetailSubtitleFileStateEnum | string  | undefined) {
        this['subtitle_file_state'] = subtitleFileState;
    }
    public get subtitleFileState(): SubtitleFileDetailSubtitleFileStateEnum | string | undefined {
        return this['subtitle_file_state'];
    }
    public withSubtitleFileDownloadUrl(subtitleFileDownloadUrl: string): SubtitleFileDetail {
        this['subtitle_file_download_url'] = subtitleFileDownloadUrl;
        return this;
    }
    public set subtitleFileDownloadUrl(subtitleFileDownloadUrl: string  | undefined) {
        this['subtitle_file_download_url'] = subtitleFileDownloadUrl;
    }
    public get subtitleFileDownloadUrl(): string | undefined {
        return this['subtitle_file_download_url'];
    }
    public withSubtitleFileUploadUrl(subtitleFileUploadUrl: string): SubtitleFileDetail {
        this['subtitle_file_upload_url'] = subtitleFileUploadUrl;
        return this;
    }
    public set subtitleFileUploadUrl(subtitleFileUploadUrl: string  | undefined) {
        this['subtitle_file_upload_url'] = subtitleFileUploadUrl;
    }
    public get subtitleFileUploadUrl(): string | undefined {
        return this['subtitle_file_upload_url'];
    }
    public withGenerateTime(generateTime: string): SubtitleFileDetail {
        this['generate_time'] = generateTime;
        return this;
    }
    public set generateTime(generateTime: string  | undefined) {
        this['generate_time'] = generateTime;
    }
    public get generateTime(): string | undefined {
        return this['generate_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SubtitleFileDetailSubtitleFileStateEnum {
    GENERATE_SUCCEED = 'GENERATE_SUCCEED',
    GENERATE_FAILED = 'GENERATE_FAILED',
    GENERATING = 'GENERATING'
}
