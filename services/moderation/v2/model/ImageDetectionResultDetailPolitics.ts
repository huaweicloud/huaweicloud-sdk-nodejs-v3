import { ImageDetectionResultDetailFaceDetail } from './ImageDetectionResultDetailFaceDetail';


export class ImageDetectionResultDetailPolitics {
    public confidence?: number;
    public label?: string;
    private 'face_detail'?: ImageDetectionResultDetailFaceDetail;
    public constructor() { 
    }
    public withConfidence(confidence: number): ImageDetectionResultDetailPolitics {
        this['confidence'] = confidence;
        return this;
    }
    public withLabel(label: string): ImageDetectionResultDetailPolitics {
        this['label'] = label;
        return this;
    }
    public withFaceDetail(faceDetail: ImageDetectionResultDetailFaceDetail): ImageDetectionResultDetailPolitics {
        this['face_detail'] = faceDetail;
        return this;
    }
    public set faceDetail(faceDetail: ImageDetectionResultDetailFaceDetail  | undefined) {
        this['face_detail'] = faceDetail;
    }
    public get faceDetail(): ImageDetectionResultDetailFaceDetail | undefined {
        return this['face_detail'];
    }
}