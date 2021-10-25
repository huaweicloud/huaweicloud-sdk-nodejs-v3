import { FinancialStatementRequestBody } from './FinancialStatementRequestBody';


export class RecognizeFinancialStatementRequest {
    public body?: FinancialStatementRequestBody;
    public constructor() { 
    }
    public withBody(body: FinancialStatementRequestBody): RecognizeFinancialStatementRequest {
        this['body'] = body;
        return this;
    }
}