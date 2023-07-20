

export class FaceSearchFaceIdReq {
    public filter?: string;
    private 'top_n'?: number;
    private 'face_id'?: string;
    private 'return_fields'?: Array<string>;
    public threshold?: number;
    public sort?: Array<{ [key: string]: string; }>;
    public constructor(faceId?: string) { 
        this['face_id'] = faceId;
    }
    public withFilter(filter: string): FaceSearchFaceIdReq {
        this['filter'] = filter;
        return this;
    }
    public withTopN(topN: number): FaceSearchFaceIdReq {
        this['top_n'] = topN;
        return this;
    }
    public set topN(topN: number  | undefined) {
        this['top_n'] = topN;
    }
    public get topN(): number | undefined {
        return this['top_n'];
    }
    public withFaceId(faceId: string): FaceSearchFaceIdReq {
        this['face_id'] = faceId;
        return this;
    }
    public set faceId(faceId: string  | undefined) {
        this['face_id'] = faceId;
    }
    public get faceId(): string | undefined {
        return this['face_id'];
    }
    public withReturnFields(returnFields: Array<string>): FaceSearchFaceIdReq {
        this['return_fields'] = returnFields;
        return this;
    }
    public set returnFields(returnFields: Array<string>  | undefined) {
        this['return_fields'] = returnFields;
    }
    public get returnFields(): Array<string> | undefined {
        return this['return_fields'];
    }
    public withThreshold(threshold: number): FaceSearchFaceIdReq {
        this['threshold'] = threshold;
        return this;
    }
    public withSort(sort: Array<{ [key: string]: string; }>): FaceSearchFaceIdReq {
        this['sort'] = sort;
        return this;
    }
}