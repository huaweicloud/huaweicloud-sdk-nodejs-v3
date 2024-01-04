

export class ShowJobUploadingAddressRspPackageUrl {
    private 'training_data_uploading_url'?: string;
    public constructor() { 
    }
    public withTrainingDataUploadingUrl(trainingDataUploadingUrl: string): ShowJobUploadingAddressRspPackageUrl {
        this['training_data_uploading_url'] = trainingDataUploadingUrl;
        return this;
    }
    public set trainingDataUploadingUrl(trainingDataUploadingUrl: string  | undefined) {
        this['training_data_uploading_url'] = trainingDataUploadingUrl;
    }
    public get trainingDataUploadingUrl(): string | undefined {
        return this['training_data_uploading_url'];
    }
}