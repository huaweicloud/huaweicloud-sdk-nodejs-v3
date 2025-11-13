

export class UpdateAudioRecordConfigReq {
    private 'obs_bucket_name'?: string;
    private 'obs_endpoint'?: string;
    private 'enable_audio_record'?: boolean;
    public constructor() { 
    }
    public withObsBucketName(obsBucketName: string): UpdateAudioRecordConfigReq {
        this['obs_bucket_name'] = obsBucketName;
        return this;
    }
    public set obsBucketName(obsBucketName: string  | undefined) {
        this['obs_bucket_name'] = obsBucketName;
    }
    public get obsBucketName(): string | undefined {
        return this['obs_bucket_name'];
    }
    public withObsEndpoint(obsEndpoint: string): UpdateAudioRecordConfigReq {
        this['obs_endpoint'] = obsEndpoint;
        return this;
    }
    public set obsEndpoint(obsEndpoint: string  | undefined) {
        this['obs_endpoint'] = obsEndpoint;
    }
    public get obsEndpoint(): string | undefined {
        return this['obs_endpoint'];
    }
    public withEnableAudioRecord(enableAudioRecord: boolean): UpdateAudioRecordConfigReq {
        this['enable_audio_record'] = enableAudioRecord;
        return this;
    }
    public set enableAudioRecord(enableAudioRecord: boolean  | undefined) {
        this['enable_audio_record'] = enableAudioRecord;
    }
    public get enableAudioRecord(): boolean | undefined {
        return this['enable_audio_record'];
    }
}