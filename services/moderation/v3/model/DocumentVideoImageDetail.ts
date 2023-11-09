import { DocumentVideoImageDetailSegments } from './DocumentVideoImageDetailSegments';


export class DocumentVideoImageDetail {
    public time?: number;
    public suggestion?: string;
    private 'ocr_text'?: string;
    public label?: string;
    public segments?: Array<DocumentVideoImageDetailSegments>;
    public constructor() { 
    }
    public withTime(time: number): DocumentVideoImageDetail {
        this['time'] = time;
        return this;
    }
    public withSuggestion(suggestion: string): DocumentVideoImageDetail {
        this['suggestion'] = suggestion;
        return this;
    }
    public withOcrText(ocrText: string): DocumentVideoImageDetail {
        this['ocr_text'] = ocrText;
        return this;
    }
    public set ocrText(ocrText: string  | undefined) {
        this['ocr_text'] = ocrText;
    }
    public get ocrText(): string | undefined {
        return this['ocr_text'];
    }
    public withLabel(label: string): DocumentVideoImageDetail {
        this['label'] = label;
        return this;
    }
    public withSegments(segments: Array<DocumentVideoImageDetailSegments>): DocumentVideoImageDetail {
        this['segments'] = segments;
        return this;
    }
}