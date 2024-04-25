import { BankReceiptRequestBody } from './BankReceiptRequestBody';


export class RecognizeBankReceiptRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: BankReceiptRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeBankReceiptRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: BankReceiptRequestBody): RecognizeBankReceiptRequest {
        this['body'] = body;
        return this;
    }
}