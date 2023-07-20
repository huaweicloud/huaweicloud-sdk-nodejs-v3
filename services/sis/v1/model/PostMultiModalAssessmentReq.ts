import { MultiModalConfig } from './MultiModalConfig';


export class PostMultiModalAssessmentReq {
    public config?: MultiModalConfig;
    private 'video_data'?: string;
    private 'ref_text'?: string;
    public constructor(config?: MultiModalConfig, videoData?: string, refText?: string) { 
        this['config'] = config;
        this['video_data'] = videoData;
        this['ref_text'] = refText;
    }
    public withConfig(config: MultiModalConfig): PostMultiModalAssessmentReq {
        this['config'] = config;
        return this;
    }
    public withVideoData(videoData: string): PostMultiModalAssessmentReq {
        this['video_data'] = videoData;
        return this;
    }
    public set videoData(videoData: string  | undefined) {
        this['video_data'] = videoData;
    }
    public get videoData(): string | undefined {
        return this['video_data'];
    }
    public withRefText(refText: string): PostMultiModalAssessmentReq {
        this['ref_text'] = refText;
        return this;
    }
    public set refText(refText: string  | undefined) {
        this['ref_text'] = refText;
    }
    public get refText(): string | undefined {
        return this['ref_text'];
    }
}