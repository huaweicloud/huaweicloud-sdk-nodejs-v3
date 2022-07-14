

export class ImageTaggingInstance {
    private 'bounding_box'?: object | undefined;
    public confidence?: string;
    public constructor() { 
    }
    public withBoundingBox(boundingBox: object): ImageTaggingInstance {
        this['bounding_box'] = boundingBox;
        return this;
    }
    public set boundingBox(boundingBox: object | undefined) {
        this['bounding_box'] = boundingBox;
    }
    public get boundingBox() {
        return this['bounding_box'];
    }
    public withConfidence(confidence: string): ImageTaggingInstance {
        this['confidence'] = confidence;
        return this;
    }
}