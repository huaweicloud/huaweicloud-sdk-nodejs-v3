import { StagePluginsQueryDTO } from './StagePluginsQueryDTO';


export class ListStagePluginsRequest {
    private 'domain_id'?: string;
    public body?: StagePluginsQueryDTO;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): ListStagePluginsRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withBody(body: StagePluginsQueryDTO): ListStagePluginsRequest {
        this['body'] = body;
        return this;
    }
}