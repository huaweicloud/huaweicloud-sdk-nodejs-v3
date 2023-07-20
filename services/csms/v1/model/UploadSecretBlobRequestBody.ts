

export class UploadSecretBlobRequestBody {
    private 'secret_blob'?: string;
    public constructor(secretBlob?: string) { 
        this['secret_blob'] = secretBlob;
    }
    public withSecretBlob(secretBlob: string): UploadSecretBlobRequestBody {
        this['secret_blob'] = secretBlob;
        return this;
    }
    public set secretBlob(secretBlob: string  | undefined) {
        this['secret_blob'] = secretBlob;
    }
    public get secretBlob(): string | undefined {
        return this['secret_blob'];
    }
}