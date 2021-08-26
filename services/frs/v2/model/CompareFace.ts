import { BoundingBox } from './BoundingBox';


export class CompareFace {
    private 'bounding_box': BoundingBox | undefined;
    public constructor(boundingBox?: any) { 
        this['bounding_box'] = boundingBox;
    }
    public withBoundingBox(boundingBox: BoundingBox): CompareFace {
        this['bounding_box'] = boundingBox;
        return this;
    }
    public set boundingBox(boundingBox: BoundingBox | undefined) {
        this['bounding_box'] = boundingBox;
    }
    public get boundingBox() {
        return this['bounding_box'];
    }
}