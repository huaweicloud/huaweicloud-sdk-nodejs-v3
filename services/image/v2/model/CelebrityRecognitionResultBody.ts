

export class CelebrityRecognitionResultBody {
    public confidence?: number;
    private 'face_detail'?: object | undefined;
    public label?: string;
    public constructor() { 
    }
    public withConfidence(confidence: number): CelebrityRecognitionResultBody {
        this['confidence'] = confidence;
        return this;
    }
    public withFaceDetail(faceDetail: object): CelebrityRecognitionResultBody {
        this['face_detail'] = faceDetail;
        return this;
    }
    public set faceDetail(faceDetail: object | undefined) {
        this['face_detail'] = faceDetail;
    }
    public get faceDetail() {
        return this['face_detail'];
    }
    public withLabel(label: string): CelebrityRecognitionResultBody {
        this['label'] = label;
        return this;
    }
}