

export class CategorySuggestions {
    public politics?: string;
    public terrorism?: string;
    public porn?: string;
    public constructor() { 
    }
    public withPolitics(politics: string): CategorySuggestions {
        this['politics'] = politics;
        return this;
    }
    public withTerrorism(terrorism: string): CategorySuggestions {
        this['terrorism'] = terrorism;
        return this;
    }
    public withPorn(porn: string): CategorySuggestions {
        this['porn'] = porn;
        return this;
    }
}