import { VideoModerationDetailSegment } from './VideoModerationDetailSegment';
import { VideoModerationImageDetailListFaceLocation } from './VideoModerationImageDetailListFaceLocation';
import { VideoModerationImageDetailListQrLocation } from './VideoModerationImageDetailListQrLocation';


export class VideoModerationImageDetailList {
    public confidence?: number;
    public category?: VideoModerationImageDetailListCategoryEnum | string;
    public suggestion?: VideoModerationImageDetailListSuggestionEnum | string;
    public label?: string;
    private 'face_location'?: VideoModerationImageDetailListFaceLocation;
    private 'qr_location'?: VideoModerationImageDetailListQrLocation;
    private 'qr_content'?: string;
    public segments?: Array<VideoModerationDetailSegment>;
    public constructor() { 
    }
    public withConfidence(confidence: number): VideoModerationImageDetailList {
        this['confidence'] = confidence;
        return this;
    }
    public withCategory(category: VideoModerationImageDetailListCategoryEnum | string): VideoModerationImageDetailList {
        this['category'] = category;
        return this;
    }
    public withSuggestion(suggestion: VideoModerationImageDetailListSuggestionEnum | string): VideoModerationImageDetailList {
        this['suggestion'] = suggestion;
        return this;
    }
    public withLabel(label: string): VideoModerationImageDetailList {
        this['label'] = label;
        return this;
    }
    public withFaceLocation(faceLocation: VideoModerationImageDetailListFaceLocation): VideoModerationImageDetailList {
        this['face_location'] = faceLocation;
        return this;
    }
    public set faceLocation(faceLocation: VideoModerationImageDetailListFaceLocation  | undefined) {
        this['face_location'] = faceLocation;
    }
    public get faceLocation(): VideoModerationImageDetailListFaceLocation | undefined {
        return this['face_location'];
    }
    public withQrLocation(qrLocation: VideoModerationImageDetailListQrLocation): VideoModerationImageDetailList {
        this['qr_location'] = qrLocation;
        return this;
    }
    public set qrLocation(qrLocation: VideoModerationImageDetailListQrLocation  | undefined) {
        this['qr_location'] = qrLocation;
    }
    public get qrLocation(): VideoModerationImageDetailListQrLocation | undefined {
        return this['qr_location'];
    }
    public withQrContent(qrContent: string): VideoModerationImageDetailList {
        this['qr_content'] = qrContent;
        return this;
    }
    public set qrContent(qrContent: string  | undefined) {
        this['qr_content'] = qrContent;
    }
    public get qrContent(): string | undefined {
        return this['qr_content'];
    }
    public withSegments(segments: Array<VideoModerationDetailSegment>): VideoModerationImageDetailList {
        this['segments'] = segments;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VideoModerationImageDetailListCategoryEnum {
    POLITICS = 'politics',
    TERRORISM = 'terrorism',
    PORN = 'porn',
    IMAGE_TEXT = 'image_text'
}
/**
    * @export
    * @enum {string}
    */
export enum VideoModerationImageDetailListSuggestionEnum {
    BLOCK = 'block',
    REVIEW = 'review'
}
