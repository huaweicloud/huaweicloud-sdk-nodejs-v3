

export class ShowPermanentAccessKeyRequest {
    private 'access_key': string | undefined;
    public constructor(accessKey: any) { 
        this['access_key'] = accessKey;
    }
    public withAccessKey(accessKey: string): ShowPermanentAccessKeyRequest {
        this['access_key'] = accessKey;
        return this;
    }
    public set accessKey(accessKey: string | undefined) {
        this['access_key'] = accessKey;
    }
    public get accessKey() {
        return this['access_key'];
    }
}