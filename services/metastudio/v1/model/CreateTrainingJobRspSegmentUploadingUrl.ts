

export class CreateTrainingJobRspSegmentUploadingUrl {
    private 'audio_uploading_url'?: Array<string>;
    private 'txt_uploading_url'?: Array<string>;
    public constructor() { 
    }
    public withAudioUploadingUrl(audioUploadingUrl: Array<string>): CreateTrainingJobRspSegmentUploadingUrl {
        this['audio_uploading_url'] = audioUploadingUrl;
        return this;
    }
    public set audioUploadingUrl(audioUploadingUrl: Array<string>  | undefined) {
        this['audio_uploading_url'] = audioUploadingUrl;
    }
    public get audioUploadingUrl(): Array<string> | undefined {
        return this['audio_uploading_url'];
    }
    public withTxtUploadingUrl(txtUploadingUrl: Array<string>): CreateTrainingJobRspSegmentUploadingUrl {
        this['txt_uploading_url'] = txtUploadingUrl;
        return this;
    }
    public set txtUploadingUrl(txtUploadingUrl: Array<string>  | undefined) {
        this['txt_uploading_url'] = txtUploadingUrl;
    }
    public get txtUploadingUrl(): Array<string> | undefined {
        return this['txt_uploading_url'];
    }
}