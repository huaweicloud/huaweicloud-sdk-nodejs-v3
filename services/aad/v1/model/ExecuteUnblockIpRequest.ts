import { ExecuteUnblockIpRequestBody } from './ExecuteUnblockIpRequestBody';


export class ExecuteUnblockIpRequest {
    private 'domain_id'?: string;
    public body?: ExecuteUnblockIpRequestBody;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): ExecuteUnblockIpRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withBody(body: ExecuteUnblockIpRequestBody): ExecuteUnblockIpRequest {
        this['body'] = body;
        return this;
    }
}