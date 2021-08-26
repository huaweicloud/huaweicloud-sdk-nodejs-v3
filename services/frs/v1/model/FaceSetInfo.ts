

export class FaceSetInfo {
    private 'face_number': number | undefined;
    private 'external_fields': object | undefined;
    private 'face_set_id': string | undefined;
    private 'face_set_name': string | undefined;
    private 'create_date': string | undefined;
    private 'face_set_capacity': number | undefined;
    public constructor(faceNumber?: any, externalFields?: any, faceSetId?: any, faceSetName?: any, createDate?: any, faceSetCapacity?: any) { 
        this['face_number'] = faceNumber;
        this['external_fields'] = externalFields;
        this['face_set_id'] = faceSetId;
        this['face_set_name'] = faceSetName;
        this['create_date'] = createDate;
        this['face_set_capacity'] = faceSetCapacity;
    }
    public withFaceNumber(faceNumber: number): FaceSetInfo {
        this['face_number'] = faceNumber;
        return this;
    }
    public set faceNumber(faceNumber: number | undefined) {
        this['face_number'] = faceNumber;
    }
    public get faceNumber() {
        return this['face_number'];
    }
    public withExternalFields(externalFields: object): FaceSetInfo {
        this['external_fields'] = externalFields;
        return this;
    }
    public set externalFields(externalFields: object | undefined) {
        this['external_fields'] = externalFields;
    }
    public get externalFields() {
        return this['external_fields'];
    }
    public withFaceSetId(faceSetId: string): FaceSetInfo {
        this['face_set_id'] = faceSetId;
        return this;
    }
    public set faceSetId(faceSetId: string | undefined) {
        this['face_set_id'] = faceSetId;
    }
    public get faceSetId() {
        return this['face_set_id'];
    }
    public withFaceSetName(faceSetName: string): FaceSetInfo {
        this['face_set_name'] = faceSetName;
        return this;
    }
    public set faceSetName(faceSetName: string | undefined) {
        this['face_set_name'] = faceSetName;
    }
    public get faceSetName() {
        return this['face_set_name'];
    }
    public withCreateDate(createDate: string): FaceSetInfo {
        this['create_date'] = createDate;
        return this;
    }
    public set createDate(createDate: string | undefined) {
        this['create_date'] = createDate;
    }
    public get createDate() {
        return this['create_date'];
    }
    public withFaceSetCapacity(faceSetCapacity: number): FaceSetInfo {
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