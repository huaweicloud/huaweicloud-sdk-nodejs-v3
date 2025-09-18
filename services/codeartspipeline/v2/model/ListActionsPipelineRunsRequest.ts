import { ActionsPipelineRunsQueryDTO } from './ActionsPipelineRunsQueryDTO';


export class ListActionsPipelineRunsRequest {
    private 'domain_id'?: string;
    public body?: ActionsPipelineRunsQueryDTO;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): ListActionsPipelineRunsRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withBody(body: ActionsPipelineRunsQueryDTO): ListActionsPipelineRunsRequest {
        this['body'] = body;
        return this;
    }
}