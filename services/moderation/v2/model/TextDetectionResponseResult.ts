

export class TextDetectionResponseResult {
    public suggestion?: string;
    public detail?: object;
    public constructor() { 
    }
    public withSuggestion(suggestion: string): TextDetectionResponseResult {
        this['suggestion'] = suggestion;
        return this;
    }
    public withDetail(detail: object): TextDetectionResponseResult {
        this['detail'] = detail;
        return this;
    }
}