import { DocumentAudioDetail } from './DocumentAudioDetail';
import { DocumentQueryResponseResultSegments } from './DocumentQueryResponseResultSegments';
import { DocumentVideoImageDetail } from './DocumentVideoImageDetail';


export class DocumentQueryResponseResultDetails {
    public suggestion?: string;
    public type?: string;
    public label?: string;
    public index?: number;
    public text?: string;
    private 'start_position'?: number;
    private 'end_position'?: number;
    private 'image_url'?: string;
    public segments?: Array<DocumentQueryResponseResultSegments>;
    private 'video_image_details'?: Array<DocumentVideoImageDetail>;
    private 'audio_details'?: Array<DocumentAudioDetail>;
    public constructor() { 
    }
    public withSuggestion(suggestion: string): DocumentQueryResponseResultDetails {
        this['suggestion'] = suggestion;
        return this;
    }
    public withType(type: string): DocumentQueryResponseResultDetails {
        this['type'] = type;
        return this;
    }
    public withLabel(label: string): DocumentQueryResponseResultDetails {
        this['label'] = label;
        return this;
    }
    public withIndex(index: number): DocumentQueryResponseResultDetails {
        this['index'] = index;
        return this;
    }
    public withText(text: string): DocumentQueryResponseResultDetails {
        this['text'] = text;
        return this;
    }
    public withStartPosition(startPosition: number): DocumentQueryResponseResultDetails {
        this['start_position'] = startPosition;
        return this;
    }
    public set startPosition(startPosition: number  | undefined) {
        this['start_position'] = startPosition;
    }
    public get startPosition(): number | undefined {
        return this['start_position'];
    }
    public withEndPosition(endPosition: number): DocumentQueryResponseResultDetails {
        this['end_position'] = endPosition;
        return this;
    }
    public set endPosition(endPosition: number  | undefined) {
        this['end_position'] = endPosition;
    }
    public get endPosition(): number | undefined {
        return this['end_position'];
    }
    public withImageUrl(imageUrl: string): DocumentQueryResponseResultDetails {
        this['image_url'] = imageUrl;
        return this;
    }
    public set imageUrl(imageUrl: string  | undefined) {
        this['image_url'] = imageUrl;
    }
    public get imageUrl(): string | undefined {
        return this['image_url'];
    }
    public withSegments(segments: Array<DocumentQueryResponseResultSegments>): DocumentQueryResponseResultDetails {
        this['segments'] = segments;
        return this;
    }
    public withVideoImageDetails(videoImageDetails: Array<DocumentVideoImageDetail>): DocumentQueryResponseResultDetails {
        this['video_image_details'] = videoImageDetails;
        return this;
    }
    public set videoImageDetails(videoImageDetails: Array<DocumentVideoImageDetail>  | undefined) {
        this['video_image_details'] = videoImageDetails;
    }
    public get videoImageDetails(): Array<DocumentVideoImageDetail> | undefined {
        return this['video_image_details'];
    }
    public withAudioDetails(audioDetails: Array<DocumentAudioDetail>): DocumentQueryResponseResultDetails {
        this['audio_details'] = audioDetails;
        return this;
    }
    public set audioDetails(audioDetails: Array<DocumentAudioDetail>  | undefined) {
        this['audio_details'] = audioDetails;
    }
    public get audioDetails(): Array<DocumentAudioDetail> | undefined {
        return this['audio_details'];
    }
}