import { DeleteActiveAlarmsRequestBody } from './DeleteActiveAlarmsRequestBody';


export class DeleteActiveAlarmsRequest {
    private 'domain_id'?: string;
    private 'Content-Type'?: string;
    public body?: DeleteActiveAlarmsRequestBody;
    public constructor(domainId?: string, contentType?: string) { 
        this['domain_id'] = domainId;
        this['Content-Type'] = contentType;
    }
    public withDomainId(domainId: string): DeleteActiveAlarmsRequest {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withContentType(contentType: string): DeleteActiveAlarmsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: DeleteActiveAlarmsRequestBody): DeleteActiveAlarmsRequest {
        this['body'] = body;
        return this;
    }
}