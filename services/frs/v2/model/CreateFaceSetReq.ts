import { TypeInfo } from './TypeInfo';


export class CreateFaceSetReq {
    private 'external_fields'?: { [key: string]: TypeInfo; } | undefined;
    private 'face_set_name': string | undefined;
    private 'face_set_capacity'?: number | undefined;
    public constructor(faceSetName?: any) { 
        this['face_set_name'] = faceSetName;
    }
    public withExternalFields(externalFields: { [key: string]: TypeInfo; }): CreateFaceSetReq {
        this['external_fields'] = externalFields;
        return this;
    }
    public set externalFields(externalFields: { [key: string]: TypeInfo; } | undefined) {
        this['external_fields'] = externalFields;
    }
    public get externalFields() {
        return this['external_fields'];
    }
    public withFaceSetName(faceSetName: string): CreateFaceSetReq {
        this['face_set_name'] = faceSetName;
        return this;
    }
    public set faceSetName(faceSetName: string | undefined) {
        this['face_set_name'] = faceSetName;
    }
    public get faceSetName() {
        return this['face_set_name'];
    }
    public withFaceSetCapacity(faceSetCapacity: number): CreateFaceSetReq {
        this['face_set_capacity'] = faceSetCapacity;
        return this;
    }
    public set faceSetCapacity(faceSetCapacity: number | undefined) {
        this['face_set_capacity'] = faceSetCapacity;
    }
    public get faceSetCapacity() {
        return this['face_set_capacity'];
    }
}