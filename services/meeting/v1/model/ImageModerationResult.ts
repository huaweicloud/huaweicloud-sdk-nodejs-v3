import { CategorySuggestions } from './CategorySuggestions';


export class ImageModerationResult {
    public suggestion?: string;
    private 'category_suggestions'?: CategorySuggestions | undefined;
    public constructor() { 
    }
    public withSuggestion(suggestion: string): ImageModerationResult {
        this['suggestion'] = suggestion;
        return this;
    }
    public withCategorySuggestions(categorySuggestions: CategorySuggestions): ImageModerationResult {
        this['category_suggestions'] = categorySuggestions;
        return this;
    }
    public set categorySuggestions(categorySuggestions: CategorySuggestions | undefined) {
        this['category_suggestions'] = categorySuggestions;
    }
    public get categorySuggestions() {
        return this['category_suggestions'];
    }
}