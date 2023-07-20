import { FinancialStatementRequestBody } from './FinancialStatementRequestBody';


export class RecognizeFinancialStatementRequest {
    private 'Enterprise-Project-Id'?: string;
    public body?: FinancialStatementRequestBody;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): RecognizeFinancialStatementRequest {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['Enterprise-Project-Id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['Enterprise-Project-Id'];
    }
    public withBody(body: FinancialStatementRequestBody): RecognizeFinancialStatementRequest {
        this['body'] = body;
        return this;
    }
}