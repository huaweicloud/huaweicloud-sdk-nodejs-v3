

export class UpdateExternalIdPConfigurationForDirectoryReqBody {
    private 'entity_id'?: string;
    private 'login_url'?: string;
    public constructor(entityId?: string, loginUrl?: string) { 
        this['entity_id'] = entityId;
        this['login_url'] = loginUrl;
    }
    public withEntityId(entityId: string): UpdateExternalIdPConfigurationForDirectoryReqBody {
        this['entity_id'] = entityId;
        return this;
    }
    public set entityId(entityId: string  | undefined) {
        this['entity_id'] = entityId;
    }
    public get entityId(): string | undefined {
        return this['entity_id'];
    }
    public withLoginUrl(loginUrl: string): UpdateExternalIdPConfigurationForDirectoryReqBody {
        this['login_url'] = loginUrl;
        return this;
    }
    public set loginUrl(loginUrl: string  | undefined) {
        this['login_url'] = loginUrl;
    }
    public get loginUrl(): string | undefined {
        return this['login_url'];
    }
}