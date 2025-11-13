

export class CollectPublicationMonitorRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'publication_id'?: string;
    public constructor(instanceId?: string, publicationId?: string) { 
        this['instance_id'] = instanceId;
        this['publication_id'] = publicationId;
    }
    public withXLanguage(xLanguage: string): CollectPublicationMonitorRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): CollectPublicationMonitorRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withPublicationId(publicationId: string): CollectPublicationMonitorRequest {
        this['publication_id'] = publicationId;
        return this;
    }
    public set publicationId(publicationId: string  | undefined) {
        this['publication_id'] = publicationId;
    }
    public get publicationId(): string | undefined {
        return this['publication_id'];
    }
}