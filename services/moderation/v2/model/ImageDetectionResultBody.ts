import { ImageDetectionResultDetail } from './ImageDetectionResultDetail';


export class ImageDetectionResultBody {
    public detail?: ImageDetectionResultDetail;
    public suggestion?: string;
    private 'category_suggestions'?: { [key: string]: string; };
    private 'ocr_text'?: string;
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
    public set categorySuggestions(categorySuggestions: { [key: string]: string; }  | undefined) {
        this['category_suggestions'] = categorySuggestions;
    }
    public get categorySuggestions(): { [key: string]: string; } | undefined {
        return this['category_suggestions'];
    }
    public withOcrText(ocrText: string): ImageDetectionResultBody {
        this['ocr_text'] = ocrText;
        return this;
    }
    public set ocrText(ocrText: string  | undefined) {
        this['ocr_text'] = ocrText;
    }
    public get ocrText(): string | undefined {
        return this['ocr_text'];
    }
}