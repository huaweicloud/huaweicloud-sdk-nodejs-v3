import { BoundingBox } from './BoundingBox';


export class FaceSetFace {
    private 'bounding_box': BoundingBox | undefined;
    private 'external_fields': object | undefined;
    private 'external_image_id': string | undefined;
    private 'face_id': string | undefined;
    public constructor(boundingBox?: any, externalFields?: any, externalImageId?: any, faceId?: any) { 
        this['bounding_box'] = boundingBox;
        this['external_fields'] = externalFields;
        this['external_image_id'] = externalImageId;
        this['face_id'] = faceId;
    }
    public withBoundingBox(boundingBox: BoundingBox): FaceSetFace {
        this['bounding_box'] = boundingBox;
        return this;
    }
    public set boundingBox(boundingBox: BoundingBox | undefined) {
        this['bounding_box'] = boundingBox;
    }
    public get boundingBox() {
        return this['bounding_box'];
    }
    public withExternalFields(externalFields: object): FaceSetFace {
        this['external_fields'] = externalFields;
        return this;
    }
    public set externalFields(externalFields: object | undefined) {
        this['external_fields'] = externalFields;
    }
    public get externalFields() {
        return this['external_fields'];
    }
    public withExternalImageId(externalImageId: string): FaceSetFace {
        this['external_image_id'] = externalImageId;
        return this;
    }
    public set externalImageId(externalImageId: string | undefined) {
        this['external_image_id'] = externalImageId;
    }
    public get externalImageId() {
        return this['external_image_id'];
    }
    public withFaceId(faceId: string): FaceSetFace {
        this['face_id'] = faceId;
        return this;
    }
    public set faceId(faceId: string | undefined) {
        this['face_id'] = faceId;
    }
    public get faceId() {
        return this['face_id'];
    }
}