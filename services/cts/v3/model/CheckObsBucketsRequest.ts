import { CheckObsBucketsRequestBody } from './CheckObsBucketsRequestBody';


export class CheckObsBucketsRequest {
    private 'domain_id'?: string;
    public body?: CheckObsBucketsRequestBody;
    public constructor(domainId?: string) { 
        this['domain_id'] = domainId;
    }
    public withDomainId(domainId: string): CheckObsBucketsRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withBody(body: CheckObsBucketsRequestBody): CheckObsBucketsRequest {
        this['body'] = body;
        return this;
    }
}