

export class PornModerationResultDetail {
    public confidence?: number;
    public label?: string;
    public constructor() { 
    }
    public withConfidence(confidence: number): PornModerationResultDetail {
        this['confidence'] = confidence;
        return this;
    }
    public withLabel(label: string): PornModerationResultDetail {
        this['label'] = label;
        return this;
    }
}