

export class ShowCsrPrivateKeyRequest {
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ShowCsrPrivateKeyRequest {
        this['id'] = id;
        return this;
    }
}