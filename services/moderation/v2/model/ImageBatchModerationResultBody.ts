import { ImageDetectionResultDetail } from './ImageDetectionResultDetail';


export class ImageBatchModerationResultBody {
    public url?: string;
    public suggestion?: string;
    public detail?: ImageDetectionResultDetail;
    private 'category_suggestions'?: object | undefined;
    public constructor() { 
    }
    public withUrl(url: string): ImageBatchModerationResultBody {
        this['url'] = url;
        return this;
    }
    public withSuggestion(suggestion: string): ImageBatchModerationResultBody {
        this['suggestion'] = suggestion;
        return this;
    }
    public withDetail(detail: ImageDetectionResultDetail): ImageBatchModerationResultBody {
        this['detail'] = detail;
        return this;
    }
    public withCategorySuggestions(categorySuggestions: object): ImageBatchModerationResultBody {
        this['category_suggestions'] = categorySuggestions;
        return this;
    }
    public set categorySuggestions(categorySuggestions: object | undefined) {
        this['category_suggestions'] = categorySuggestions;
    }
    public get categorySuggestions() {
        return this['category_suggestions'];
    }
}