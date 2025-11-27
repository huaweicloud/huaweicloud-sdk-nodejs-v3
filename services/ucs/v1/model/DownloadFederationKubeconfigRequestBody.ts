

export class DownloadFederationKubeconfigRequestBody {
    public duration?: number;
    public constructor(duration?: number) { 
        this['duration'] = duration;
    }
    public withDuration(duration: number): DownloadFederationKubeconfigRequestBody {
        this['duration'] = duration;
        return this;
    }
}