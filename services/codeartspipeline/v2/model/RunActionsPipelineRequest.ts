import { ActionsManualRunPipelineDTO } from './ActionsManualRunPipelineDTO';


export class RunActionsPipelineRequest {
    private 'domain_id'?: string;
    public body?: ActionsManualRunPipelineDTO;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): RunActionsPipelineRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withBody(body: ActionsManualRunPipelineDTO): RunActionsPipelineRequest {
        this['body'] = body;
        return this;
    }
}