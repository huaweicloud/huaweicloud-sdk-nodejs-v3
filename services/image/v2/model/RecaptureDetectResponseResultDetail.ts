

export class RecaptureDetectResponseResultDetail {
    public label?: string;
    public confidence?: string;
    public constructor() { 
    }
    public withLabel(label: string): RecaptureDetectResponseResultDetail {
        this['label'] = label;
        return this;
    }
    public withConfidence(confidence: string): RecaptureDetectResponseResultDetail {
        this['confidence'] = confidence;
        return this;
    }
}