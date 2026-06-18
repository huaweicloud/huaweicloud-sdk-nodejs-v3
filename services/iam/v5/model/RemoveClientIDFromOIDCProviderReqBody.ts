

export class RemoveClientIDFromOIDCProviderReqBody {
    private 'client_id'?: string;
    public constructor(clientId?: string) { 
        this['client_id'] = clientId;
    }
    public withClientId(clientId: string): RemoveClientIDFromOIDCProviderReqBody {
        this['client_id'] = clientId;
        return this;
    }
    public set clientId(clientId: string  | undefined) {
        this['client_id'] = clientId;
    }
    public get clientId(): string | undefined {
        return this['client_id'];
    }
}