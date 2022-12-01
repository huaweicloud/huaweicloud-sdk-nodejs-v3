

export class ImageMediaTaggingDetInstance {
    private 'bounding_box'?: object | undefined;
    public confidence?: string;
    public constructor() { 
    }
    public withBoundingBox(boundingBox: object): ImageMediaTaggingDetInstance {
        this['bounding_box'] = boundingBox;
        return this;
    }
    public set boundingBox(boundingBox: object | undefined) {
        this['bounding_box'] = boundingBox;
    }
    public get boundingBox() {
        return this['bounding_box'];
    }
    public withConfidence(confidence: string): ImageMediaTaggingDetInstance {
        this['confidence'] = confidence;
        return this;
    }
}