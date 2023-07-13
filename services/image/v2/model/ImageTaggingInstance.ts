import { ImageTaggingBoundingBox } from './ImageTaggingBoundingBox';


export class ImageTaggingInstance {
    private 'bounding_box'?: ImageTaggingBoundingBox | undefined;
    public confidence?: string;
    public constructor() { 
    }
    public withBoundingBox(boundingBox: ImageTaggingBoundingBox): ImageTaggingInstance {
        this['bounding_box'] = boundingBox;
        return this;
    }
    public set boundingBox(boundingBox: ImageTaggingBoundingBox | undefined) {
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