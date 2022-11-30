

export class ShowFacesByLimitRequest {
    private 'face_set_name': string | undefined;
    public offset: number;
    public limit: number;
    public constructor(faceSetName?: any, offset?: any, limit?: any) { 
        this['face_set_name'] = faceSetName;
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withFaceSetName(faceSetName: string): ShowFacesByLimitRequest {
        this['face_set_name'] = faceSetName;
        return this;
    }
    public set faceSetName(faceSetName: string | undefined) {
        this['face_set_name'] = faceSetName;
    }
    public get faceSetName() {
        return this['face_set_name'];
    }
    public withOffset(offset: number): ShowFacesByLimitRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowFacesByLimitRequest {
        this['limit'] = limit;
        return this;
    }
}