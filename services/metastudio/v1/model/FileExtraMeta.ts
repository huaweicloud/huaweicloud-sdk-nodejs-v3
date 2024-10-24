

export class FileExtraMeta {
    private 'video_transcoding_status'?: FileExtraMetaVideoTranscodingStatusEnum | string;
    public constructor() { 
    }
    public withVideoTranscodingStatus(videoTranscodingStatus: FileExtraMetaVideoTranscodingStatusEnum | string): FileExtraMeta {
        this['video_transcoding_status'] = videoTranscodingStatus;
        return this;
    }
    public set videoTranscodingStatus(videoTranscodingStatus: FileExtraMetaVideoTranscodingStatusEnum | string  | undefined) {
        this['video_transcoding_status'] = videoTranscodingStatus;
    }
    public get videoTranscodingStatus(): FileExtraMetaVideoTranscodingStatusEnum | string | undefined {
        return this['video_transcoding_status'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum FileExtraMetaVideoTranscodingStatusEnum {
    WAITING = 'WAITING',
    TRANSCODING = 'TRANSCODING',
    FAILED = 'FAILED',
    SUCCEEDED = 'SUCCEEDED'
}
