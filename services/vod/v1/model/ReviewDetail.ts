

export class ReviewDetail {
    public confidence?: string;
    public label?: string;
    public constructor(confidence?: string) { 
        this['confidence'] = confidence;
    }
    public withConfidence(confidence: string): ReviewDetail {
        this['confidence'] = confidence;
        return this;
    }
    public withLabel(label: string): ReviewDetail {
        this['label'] = label;
        return this;
    }
}