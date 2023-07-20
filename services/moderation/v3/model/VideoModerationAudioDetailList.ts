import { VideoModerationDetailSegment } from './VideoModerationDetailSegment';


export class VideoModerationAudioDetailList {
    public confidence?: number;
    public label?: string;
    public suggestion?: VideoModerationAudioDetailListSuggestionEnum | string;
    public segments?: Array<VideoModerationDetailSegment>;
    public constructor() { 
    }
    public withConfidence(confidence: number): VideoModerationAudioDetailList {
        this['confidence'] = confidence;
        return this;
    }
    public withLabel(label: string): VideoModerationAudioDetailList {
        this['label'] = label;
        return this;
    }
    public withSuggestion(suggestion: VideoModerationAudioDetailListSuggestionEnum | string): VideoModerationAudioDetailList {
        this['suggestion'] = suggestion;
        return this;
    }
    public withSegments(segments: Array<VideoModerationDetailSegment>): VideoModerationAudioDetailList {
        this['segments'] = segments;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VideoModerationAudioDetailListSuggestionEnum {
    BLOCK = 'block',
    REVIEW = 'review'
}
