

export class HealthReportRiskSuggestion {
    private 'suggestion_code'?: string;
    private 'suggestion_content'?: string;
    public constructor(suggestionCode?: string, suggestionContent?: string) { 
        this['suggestion_code'] = suggestionCode;
        this['suggestion_content'] = suggestionContent;
    }
    public withSuggestionCode(suggestionCode: string): HealthReportRiskSuggestion {
        this['suggestion_code'] = suggestionCode;
        return this;
    }
    public set suggestionCode(suggestionCode: string  | undefined) {
        this['suggestion_code'] = suggestionCode;
    }
    public get suggestionCode(): string | undefined {
        return this['suggestion_code'];
    }
    public withSuggestionContent(suggestionContent: string): HealthReportRiskSuggestion {
        this['suggestion_content'] = suggestionContent;
        return this;
    }
    public set suggestionContent(suggestionContent: string  | undefined) {
        this['suggestion_content'] = suggestionContent;
    }
    public get suggestionContent(): string | undefined {
        return this['suggestion_content'];
    }
}