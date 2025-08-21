import { CreateTemplateRequestBody } from './CreateTemplateRequestBody';


export class UpdateDomainTemplateRequest {
    private 'tml_id'?: string;
    public body?: CreateTemplateRequestBody;
    public constructor(tmlId?: string) { 
        this['tml_id'] = tmlId;
    }
    public withTmlId(tmlId: string): UpdateDomainTemplateRequest {
        this['tml_id'] = tmlId;
        return this;
    }
    public set tmlId(tmlId: string  | undefined) {
        this['tml_id'] = tmlId;
    }
    public get tmlId(): string | undefined {
        return this['tml_id'];
    }
    public withBody(body: CreateTemplateRequestBody): UpdateDomainTemplateRequest {
        this['body'] = body;
        return this;
    }
}