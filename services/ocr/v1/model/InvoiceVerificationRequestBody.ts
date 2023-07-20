

export class InvoiceVerificationRequestBody {
    public code?: string;
    private 'number'?: string;
    private 'issue_date'?: string;
    private 'check_code'?: string;
    private 'subtotal_amount'?: string;
    public constructor(code?: string, modelNumber?: string, issueDate?: string) { 
        this['code'] = code;
        this['number'] = modelNumber;
        this['issue_date'] = issueDate;
    }
    public withCode(code: string): InvoiceVerificationRequestBody {
        this['code'] = code;
        return this;
    }
    public withModelNumber(modelNumber: string): InvoiceVerificationRequestBody {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: string  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): string | undefined {
        return this['number'];
    }
    public withIssueDate(issueDate: string): InvoiceVerificationRequestBody {
        this['issue_date'] = issueDate;
        return this;
    }
    public set issueDate(issueDate: string  | undefined) {
        this['issue_date'] = issueDate;
    }
    public get issueDate(): string | undefined {
        return this['issue_date'];
    }
    public withCheckCode(checkCode: string): InvoiceVerificationRequestBody {
        this['check_code'] = checkCode;
        return this;
    }
    public set checkCode(checkCode: string  | undefined) {
        this['check_code'] = checkCode;
    }
    public get checkCode(): string | undefined {
        return this['check_code'];
    }
    public withSubtotalAmount(subtotalAmount: string): InvoiceVerificationRequestBody {
        this['subtotal_amount'] = subtotalAmount;
        return this;
    }
    public set subtotalAmount(subtotalAmount: string  | undefined) {
        this['subtotal_amount'] = subtotalAmount;
    }
    public get subtotalAmount(): string | undefined {
        return this['subtotal_amount'];
    }
}