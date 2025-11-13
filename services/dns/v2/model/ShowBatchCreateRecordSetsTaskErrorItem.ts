

export class ShowBatchCreateRecordSetsTaskErrorItem {
    public name?: string;
    public type?: string;
    public line?: string;
    public ttl?: number;
    public weight?: number;
    public records?: Array<string>;
    public status?: string;
    private 'error_code'?: string;
    private 'error_message'?: string;
    public constructor() { 
    }
    public withName(name: string): ShowBatchCreateRecordSetsTaskErrorItem {
        this['name'] = name;
        return this;
    }
    public withType(type: string): ShowBatchCreateRecordSetsTaskErrorItem {
        this['type'] = type;
        return this;
    }
    public withLine(line: string): ShowBatchCreateRecordSetsTaskErrorItem {
        this['line'] = line;
        return this;
    }
    public withTtl(ttl: number): ShowBatchCreateRecordSetsTaskErrorItem {
        this['ttl'] = ttl;
        return this;
    }
    public withWeight(weight: number): ShowBatchCreateRecordSetsTaskErrorItem {
        this['weight'] = weight;
        return this;
    }
    public withRecords(records: Array<string>): ShowBatchCreateRecordSetsTaskErrorItem {
        this['records'] = records;
        return this;
    }
    public withStatus(status: string): ShowBatchCreateRecordSetsTaskErrorItem {
        this['status'] = status;
        return this;
    }
    public withErrorCode(errorCode: string): ShowBatchCreateRecordSetsTaskErrorItem {
        this['error_code'] = errorCode;
        return this;
    }
    public set errorCode(errorCode: string  | undefined) {
        this['error_code'] = errorCode;
    }
    public get errorCode(): string | undefined {
        return this['error_code'];
    }
    public withErrorMessage(errorMessage: string): ShowBatchCreateRecordSetsTaskErrorItem {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
}