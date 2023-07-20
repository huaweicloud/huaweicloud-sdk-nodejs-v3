import { BoundingBox } from './BoundingBox';


export class SearchFace {
    private 'bounding_box'?: BoundingBox;
    public similarity?: number;
    private 'external_fields'?: object;
    private 'external_image_id'?: string;
    private 'face_id'?: string;
    public constructor() { 
    }
    public withBoundingBox(boundingBox: BoundingBox): SearchFace {
        this['bounding_box'] = boundingBox;
        return this;
    }
    public set boundingBox(boundingBox: BoundingBox  | undefined) {
        this['bounding_box'] = boundingBox;
    }
    public get boundingBox(): BoundingBox | undefined {
        return this['bounding_box'];
    }
    public withSimilarity(similarity: number): SearchFace {
        this['similarity'] = similarity;
        return this;
    }
    public withExternalFields(externalFields: object): SearchFace {
        this['external_fields'] = externalFields;
        return this;
    }
    public set externalFields(externalFields: object  | undefined) {
        this['external_fields'] = externalFields;
    }
    public get externalFields(): object | undefined {
        return this['external_fields'];
    }
    public withExternalImageId(externalImageId: string): SearchFace {
        this['external_image_id'] = externalImageId;
        return this;
    }
    public set externalImageId(externalImageId: string  | undefined) {
        this['external_image_id'] = externalImageId;
    }
    public get externalImageId(): string | undefined {
        return this['external_image_id'];
    }
    public withFaceId(faceId: string): SearchFace {
        this['face_id'] = faceId;
        return this;
    }
    public set faceId(faceId: string  | undefined) {
        this['face_id'] = faceId;
    }
    public get faceId(): string | undefined {
        return this['face_id'];
    }
}