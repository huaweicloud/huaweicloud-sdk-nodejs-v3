import { Attributes } from './Attributes';
import { BoundingBox } from './BoundingBox';


export class DetectFace {
    private 'bounding_box': BoundingBox | undefined;
    public attributes?: Attributes;
    public constructor(boundingBox?: any) { 
        this['bounding_box'] = boundingBox;
    }
    public withBoundingBox(boundingBox: BoundingBox): DetectFace {
        this['bounding_box'] = boundingBox;
        return this;
    }
    public set boundingBox(boundingBox: BoundingBox | undefined) {
        this['bounding_box'] = boundingBox;
    }
    public get boundingBox() {
        return this['bounding_box'];
    }
    public withAttributes(attributes: Attributes): DetectFace {
        this['attributes'] = attributes;
        return this;
    }
}