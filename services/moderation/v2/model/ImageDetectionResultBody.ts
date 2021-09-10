import { ImageDetectionResultDetail } from './ImageDetectionResultDetail';


export class ImageDetectionResultBody {
    public detail?: ImageDetectionResultDetail;
    public suggestion?: string;
    private 'category_suggestions'?: { [key: string]: string; } | undefined;
    public constructor() { 
    }
    public withDetail(detail: ImageDetectionResultDetail): ImageDetectionResultBody {
        this['detail'] = detail;
        return this;
    }
    public withSuggestion(suggestion: string): ImageDetectionResultBody {
        this['suggestion'] = suggestion;
        return this;
    }
    public withCategorySuggestions(categorySuggestions: { [key: string]: string; }): ImageDetectionResultBody {
        this['category_suggestions'] = categorySuggestions;
        return this;
    }
    public set categorySuggestions(categorySuggestions: { [key: string]: string; } | undefined) {
        this['category_suggestions'] = categorySuggestions;
    }
    public get categorySuggestions() {
        return this['category_suggestions'];
    }
}