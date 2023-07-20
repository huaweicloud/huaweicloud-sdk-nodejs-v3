import { TollInvoiceRequestBody } from './TollInvoiceRequestBody';


export class RecognizeTollInvoiceRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: TollInvoiceRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeTollInvoiceRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: TollInvoiceRequestBody): RecognizeTollInvoiceRequest {
        this['body'] = body;
        return this;
    }
}