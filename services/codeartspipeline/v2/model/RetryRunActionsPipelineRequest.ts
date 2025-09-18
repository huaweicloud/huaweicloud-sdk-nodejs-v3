import { ActionsReRunPipelineDTO } from './ActionsReRunPipelineDTO';


export class RetryRunActionsPipelineRequest {
    private 'domain_id'?: string;
    public body?: ActionsReRunPipelineDTO;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): RetryRunActionsPipelineRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withBody(body: ActionsReRunPipelineDTO): RetryRunActionsPipelineRequest {
        this['body'] = body;
        return this;
    }
}