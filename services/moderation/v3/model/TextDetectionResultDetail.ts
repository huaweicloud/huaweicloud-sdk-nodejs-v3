import { SegmentResult } from './SegmentResult';


export class TextDetectionResultDetail {
    public suggestion?: string;
    public label?: string;
    public confidence?: number;
    public segments?: Array<SegmentResult>;
    public constructor() { 
    }
    public withSuggestion(suggestion: string): TextDetectionResultDetail {
        this['suggestion'] = suggestion;
        return this;
    }
    public withLabel(label: string): TextDetectionResultDetail {
        this['label'] = label;
        return this;
    }
    public withConfidence(confidence: number): TextDetectionResultDetail {
        this['confidence'] = confidence;
        return this;
    }
    public withSegments(segments: Array<SegmentResult>): TextDetectionResultDetail {
        this['segments'] = segments;
        return this;
    }
}