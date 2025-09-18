import { ActionsPipelineRunsPollingQueryDTO } from './ActionsPipelineRunsPollingQueryDTO';


export class ListActionsPipelineRunsByRunIdsRequest {
    private 'domain_id'?: string;
    public body?: ActionsPipelineRunsPollingQueryDTO;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): ListActionsPipelineRunsByRunIdsRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withBody(body: ActionsPipelineRunsPollingQueryDTO): ListActionsPipelineRunsByRunIdsRequest {
        this['body'] = body;
        return this;
    }
}