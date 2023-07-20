import { BoundingBox } from './BoundingBox';


export class ImageMediaTaggingInstance {
    private 'bounding_box'?: BoundingBox;
    public confidence?: string;
    public constructor() { 
    }
    public withBoundingBox(boundingBox: BoundingBox): ImageMediaTaggingInstance {
        this['bounding_box'] = boundingBox;
        return this;
    }
    public set boundingBox(boundingBox: BoundingBox  | undefined) {
        this['bounding_box'] = boundingBox;
    }
    public get boundingBox(): BoundingBox | undefined {
        return this['bounding_box'];
    }
    public withConfidence(confidence: string): ImageMediaTaggingInstance {
        this['confidence'] = confidence;
        return this;
    }
}