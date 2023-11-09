import { DocumentVideoImageDetailSegments } from './DocumentVideoImageDetailSegments';


export class DocumentAudioDetail {
    private 'start_time'?: number;
    private 'end_time'?: number;
    public suggestion?: string;
    private 'audio_text'?: string;
    public label?: string;
    public segments?: Array<DocumentVideoImageDetailSegments>;
    public constructor() { 
    }
    public withStartTime(startTime: number): DocumentAudioDetail {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): DocumentAudioDetail {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withSuggestion(suggestion: string): DocumentAudioDetail {
        this['suggestion'] = suggestion;
        return this;
    }
    public withAudioText(audioText: string): DocumentAudioDetail {
        this['audio_text'] = audioText;
        return this;
    }
    public set audioText(audioText: string  | undefined) {
        this['audio_text'] = audioText;
    }
    public get audioText(): string | undefined {
        return this['audio_text'];
    }
    public withLabel(label: string): DocumentAudioDetail {
        this['label'] = label;
        return this;
    }
    public withSegments(segments: Array<DocumentVideoImageDetailSegments>): DocumentAudioDetail {
        this['segments'] = segments;
        return this;
    }
}