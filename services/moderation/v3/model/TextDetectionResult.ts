import { TextDetectionResultDetail } from './TextDetectionResultDetail';


export class TextDetectionResult {
    public suggestion?: string;
    public label?: string;
    public details?: Array<TextDetectionResultDetail>;
    public constructor() { 
    }
    public withSuggestion(suggestion: string): TextDetectionResult {
        this['suggestion'] = suggestion;
        return this;
    }
    public withLabel(label: string): TextDetectionResult {
        this['label'] = label;
        return this;
    }
    public withDetails(details: Array<TextDetectionResultDetail>): TextDetectionResult {
        this['details'] = details;
        return this;
    }
}