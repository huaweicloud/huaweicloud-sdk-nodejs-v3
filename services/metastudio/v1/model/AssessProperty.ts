

export class AssessProperty {
    public expected?: string;
    public actual?: string;
    public suggestion?: string;
    private 'suggestion_en'?: string;
    public status?: number;
    public constructor() { 
    }
    public withExpected(expected: string): AssessProperty {
        this['expected'] = expected;
        return this;
    }
    public withActual(actual: string): AssessProperty {
        this['actual'] = actual;
        return this;
    }
    public withSuggestion(suggestion: string): AssessProperty {
        this['suggestion'] = suggestion;
        return this;
    }
    public withSuggestionEn(suggestionEn: string): AssessProperty {
        this['suggestion_en'] = suggestionEn;
        return this;
    }
    public set suggestionEn(suggestionEn: string  | undefined) {
        this['suggestion_en'] = suggestionEn;
    }
    public get suggestionEn(): string | undefined {
        return this['suggestion_en'];
    }
    public withStatus(status: number): AssessProperty {
        this['status'] = status;
        return this;
    }
}