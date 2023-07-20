

export class DeletePermanentAccessKeyRequest {
    private 'access_key'?: string;
    public constructor(accessKey?: string) { 
        this['access_key'] = accessKey;
    }
    public withAccessKey(accessKey: string): DeletePermanentAccessKeyRequest {
        this['access_key'] = accessKey;
        return this;
    }
    public set accessKey(accessKey: string  | undefined) {
        this['access_key'] = accessKey;
    }
    public get accessKey(): string | undefined {
        return this['access_key'];
    }
}