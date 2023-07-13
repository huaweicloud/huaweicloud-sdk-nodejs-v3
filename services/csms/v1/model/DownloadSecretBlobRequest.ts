

export class DownloadSecretBlobRequest {
    private 'secret_name': string | undefined;
    public constructor(secretName?: any) { 
        this['secret_name'] = secretName;
    }
    public withSecretName(secretName: string): DownloadSecretBlobRequest {
        this['secret_name'] = secretName;
        return this;
    }
    public set secretName(secretName: string | undefined) {
        this['secret_name'] = secretName;
    }
    public get secretName() {
        return this['secret_name'];
    }
}