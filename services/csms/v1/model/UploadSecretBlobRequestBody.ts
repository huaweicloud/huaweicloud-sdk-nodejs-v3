

export class UploadSecretBlobRequestBody {
    private 'secret_blob': string | undefined;
    public constructor(secretBlob?: any) { 
        this['secret_blob'] = secretBlob;
    }
    public withSecretBlob(secretBlob: string): UploadSecretBlobRequestBody {
        this['secret_blob'] = secretBlob;
        return this;
    }
    public set secretBlob(secretBlob: string | undefined) {
        this['secret_blob'] = secretBlob;
    }
    public get secretBlob() {
        return this['secret_blob'];
    }
}