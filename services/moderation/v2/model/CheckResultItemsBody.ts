import { ImageDetectionResultDetail } from './ImageDetectionResultDetail';


export class CheckResultItemsBody {
    public url?: string;
    public suggestion?: string;
    public detail?: ImageDetectionResultDetail;
    private 'category_suggestions'?: { [key: string]: string; } | undefined;
    public constructor() { 
    }
    public withUrl(url: string): CheckResultItemsBody {
        this['url'] = url;
        return this;
    }
    public withSuggestion(suggestion: string): CheckResultItemsBody {
        this['suggestion'] = suggestion;
        return this;
    }
    public withDetail(detail: ImageDetectionResultDetail): CheckResultItemsBody {
        this['detail'] = detail;
        return this;
    }
    public withCategorySuggestions(categorySuggestions: { [key: string]: string; }): CheckResultItemsBody {
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