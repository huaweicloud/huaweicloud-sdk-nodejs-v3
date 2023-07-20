import { BoundingBox } from './BoundingBox';


export class ImageMediaTaggingDetInstance {
    private 'bounding_box'?: BoundingBox;
    public confidence?: string;
    public constructor() { 
    }
    public withBoundingBox(boundingBox: BoundingBox): ImageMediaTaggingDetInstance {
        this['bounding_box'] = boundingBox;
        return this;
    }
    public set boundingBox(boundingBox: BoundingBox  | undefined) {
        this['bounding_box'] = boundingBox;
    }
    public get boundingBox(): BoundingBox | undefined {
        return this['bounding_box'];
    }
    public withConfidence(confidence: string): ImageMediaTaggingDetInstance {
        this['confidence'] = confidence;
        return this;
    }
}