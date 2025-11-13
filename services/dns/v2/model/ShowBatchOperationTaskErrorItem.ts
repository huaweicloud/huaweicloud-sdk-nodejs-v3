

export class ShowBatchOperationTaskErrorItem {
    public item?: string;
    private 'error_message'?: string;
    public constructor() { 
    }
    public withItem(item: string): ShowBatchOperationTaskErrorItem {
        this['item'] = item;
        return this;
    }
    public withErrorMessage(errorMessage: string): ShowBatchOperationTaskErrorItem {
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