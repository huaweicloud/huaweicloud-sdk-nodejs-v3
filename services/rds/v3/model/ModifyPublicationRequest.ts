import { ModifyPublicationsRequestBody } from './ModifyPublicationsRequestBody';


export class ModifyPublicationRequest {
    private 'X-Language'?: string;
    private 'instance_id'?: string;
    private 'publication_id'?: string;
    public body?: ModifyPublicationsRequestBody;
    public constructor(instanceId?: string, publicationId?: string) { 
        this['instance_id'] = instanceId;
        this['publication_id'] = publicationId;
    }
    public withXLanguage(xLanguage: string): ModifyPublicationRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withInstanceId(instanceId: string): ModifyPublicationRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withPublicationId(publicationId: string): ModifyPublicationRequest {
        this['publication_id'] = publicationId;
        return this;
    }
    public set publicationId(publicationId: string  | undefined) {
        this['publication_id'] = publicationId;
    }
    public get publicationId(): string | undefined {
        return this['publication_id'];
    }
    public withBody(body: ModifyPublicationsRequestBody): ModifyPublicationRequest {
        this['body'] = body;
        return this;
    }
}