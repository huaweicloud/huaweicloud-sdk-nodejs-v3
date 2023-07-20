

export class ImageDetectionResultAdDetail {
    public confidence?: number;
    public label?: string;
    private 'hit_contexts'?: Array<string>;
    public constructor() { 
    }
    public withConfidence(confidence: number): ImageDetectionResultAdDetail {
        this['confidence'] = confidence;
        return this;
    }
    public withLabel(label: string): ImageDetectionResultAdDetail {
        this['label'] = label;
        return this;
    }
    public withHitContexts(hitContexts: Array<string>): ImageDetectionResultAdDetail {
        this['hit_contexts'] = hitContexts;
        return this;
    }
    public set hitContexts(hitContexts: Array<string>  | undefined) {
        this['hit_contexts'] = hitContexts;
    }
    public get hitContexts(): Array<string> | undefined {
        return this['hit_contexts'];
    }
}