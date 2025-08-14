

export class IdpSAMLConfig {
    private 'entity_id'?: string;
    private 'login_url'?: string;
    private 'want_request_signed'?: boolean;
    public constructor(entityId?: string, loginUrl?: string, wantRequestSigned?: boolean) { 
        this['entity_id'] = entityId;
        this['login_url'] = loginUrl;
        this['want_request_signed'] = wantRequestSigned;
    }
    public withEntityId(entityId: string): IdpSAMLConfig {
        this['entity_id'] = entityId;
        return this;
    }
    public set entityId(entityId: string  | undefined) {
        this['entity_id'] = entityId;
    }
    public get entityId(): string | undefined {
        return this['entity_id'];
    }
    public withLoginUrl(loginUrl: string): IdpSAMLConfig {
        this['login_url'] = loginUrl;
        return this;
    }
    public set loginUrl(loginUrl: string  | undefined) {
        this['login_url'] = loginUrl;
    }
    public get loginUrl(): string | undefined {
        return this['login_url'];
    }
    public withWantRequestSigned(wantRequestSigned: boolean): IdpSAMLConfig {
        this['want_request_signed'] = wantRequestSigned;
        return this;
    }
    public set wantRequestSigned(wantRequestSigned: boolean  | undefined) {
        this['want_request_signed'] = wantRequestSigned;
    }
    public get wantRequestSigned(): boolean | undefined {
        return this['want_request_signed'];
    }
}