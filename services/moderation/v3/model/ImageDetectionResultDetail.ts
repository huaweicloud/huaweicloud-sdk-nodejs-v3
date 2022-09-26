import { FaceLocationDetail } from './FaceLocationDetail';
import { OCRTextDetail } from './OCRTextDetail';
import { QRLocationDetail } from './QRLocationDetail';


export class ImageDetectionResultDetail {
    public suggestion: string;
    public category: string;
    public confidence: number;
    private 'face_location'?: FaceLocationDetail | undefined;
    private 'qr_location'?: QRLocationDetail | undefined;
    private 'qr_content'?: string | undefined;
    public segments?: Array<OCRTextDetail>;
    public label?: string;
    public constructor(suggestion?: any, category?: any, confidence?: any) { 
        this['suggestion'] = suggestion;
        this['category'] = category;
        this['confidence'] = confidence;
    }
    public withSuggestion(suggestion: string): ImageDetectionResultDetail {
        this['suggestion'] = suggestion;
        return this;
    }
    public withCategory(category: string): ImageDetectionResultDetail {
        this['category'] = category;
        return this;
    }
    public withConfidence(confidence: number): ImageDetectionResultDetail {
        this['confidence'] = confidence;
        return this;
    }
    public withFaceLocation(faceLocation: FaceLocationDetail): ImageDetectionResultDetail {
        this['face_location'] = faceLocation;
        return this;
    }
    public set faceLocation(faceLocation: FaceLocationDetail | undefined) {
        this['face_location'] = faceLocation;
    }
    public get faceLocation() {
        return this['face_location'];
    }
    public withQrLocation(qrLocation: QRLocationDetail): ImageDetectionResultDetail {
        this['qr_location'] = qrLocation;
        return this;
    }
    public set qrLocation(qrLocation: QRLocationDetail | undefined) {
        this['qr_location'] = qrLocation;
    }
    public get qrLocation() {
        return this['qr_location'];
    }
    public withQrContent(qrContent: string): ImageDetectionResultDetail {
        this['qr_content'] = qrContent;
        return this;
    }
    public set qrContent(qrContent: string | undefined) {
        this['qr_content'] = qrContent;
    }
    public get qrContent() {
        return this['qr_content'];
    }
    public withSegments(segments: Array<OCRTextDetail>): ImageDetectionResultDetail {
        this['segments'] = segments;
        return this;
    }
    public withLabel(label: string): ImageDetectionResultDetail {
        this['label'] = label;
        return this;
    }
}