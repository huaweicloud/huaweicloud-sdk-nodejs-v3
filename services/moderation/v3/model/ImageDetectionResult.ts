import { ImageDetectionResultDetail } from './ImageDetectionResultDetail';


export class ImageDetectionResult {
    public suggestion?: string;
    public category?: string;
    public details?: Array<ImageDetectionResultDetail>;
    private 'ocr_text'?: string;
    public constructor() { 
    }
    public withSuggestion(suggestion: string): ImageDetectionResult {
        this['suggestion'] = suggestion;
        return this;
    }
    public withCategory(category: string): ImageDetectionResult {
        this['category'] = category;
        return this;
    }
    public withDetails(details: Array<ImageDetectionResultDetail>): ImageDetectionResult {
        this['details'] = details;
        return this;
    }
    public withOcrText(ocrText: string): ImageDetectionResult {
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