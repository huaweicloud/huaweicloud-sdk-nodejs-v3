

export class ImageDetectionResultSimpleDetail {
    public confidence?: number;
    public label?: string;
    public constructor() { 
    }
    public withConfidence(confidence: number): ImageDetectionResultSimpleDetail {
        this['confidence'] = confidence;
        return this;
    }
    public withLabel(label: string): ImageDetectionResultSimpleDetail {
        this['label'] = label;
        return this;
    }
}