

export class ShowDomainStreamBackupRequest {
    private 'publish_domain'?: string;
    public constructor(publishDomain?: string) { 
        this['publish_domain'] = publishDomain;
    }
    public withPublishDomain(publishDomain: string): ShowDomainStreamBackupRequest {
        this['publish_domain'] = publishDomain;
        return this;
    }
    public set publishDomain(publishDomain: string  | undefined) {
        this['publish_domain'] = publishDomain;
    }
    public get publishDomain(): string | undefined {
        return this['publish_domain'];
    }
}