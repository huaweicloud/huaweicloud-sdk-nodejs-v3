

export class QueryDiagnosisResultSuggestionList {
    public content?: string;
    public constructor() { 
    }
    public withContent(content: string): QueryDiagnosisResultSuggestionList {
        this['content'] = content;
        return this;
    }
}