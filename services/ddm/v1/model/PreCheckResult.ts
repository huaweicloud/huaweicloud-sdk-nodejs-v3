

export class PreCheckResult {
    public name?: string;
    public status?: string;
    public note?: string;
    private 'handling_suggestion'?: string;
    private 'error_message'?: string;
    private 'error_detail_message'?: string;
    public constructor() { 
    }
    public withName(name: string): PreCheckResult {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): PreCheckResult {
        this['status'] = status;
        return this;
    }
    public withNote(note: string): PreCheckResult {
        this['note'] = note;
        return this;
    }
    public withHandlingSuggestion(handlingSuggestion: string): PreCheckResult {
        this['handling_suggestion'] = handlingSuggestion;
        return this;
    }
    public set handlingSuggestion(handlingSuggestion: string  | undefined) {
        this['handling_suggestion'] = handlingSuggestion;
    }
    public get handlingSuggestion(): string | undefined {
        return this['handling_suggestion'];
    }
    public withErrorMessage(errorMessage: string): PreCheckResult {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
    public withErrorDetailMessage(errorDetailMessage: string): PreCheckResult {
        this['error_detail_message'] = errorDetailMessage;
        return this;
    }
    public set errorDetailMessage(errorDetailMessage: string  | undefined) {
        this['error_detail_message'] = errorDetailMessage;
    }
    public get errorDetailMessage(): string | undefined {
        return this['error_detail_message'];
    }
}