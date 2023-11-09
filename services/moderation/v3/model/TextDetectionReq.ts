import { TextDetectionDataReq } from './TextDetectionDataReq';


export class TextDetectionReq {
    private 'event_type'?: string;
    public categories?: Array<string>;
    private 'glossary_names'?: Array<string>;
    public data?: TextDetectionDataReq;
    private 'white_glossary_names'?: Array<string>;
    private 'biz_type'?: string;
    public constructor(data?: TextDetectionDataReq) { 
        this['data'] = data;
    }
    public withEventType(eventType: string): TextDetectionReq {
        this['event_type'] = eventType;
        return this;
    }
    public set eventType(eventType: string  | undefined) {
        this['event_type'] = eventType;
    }
    public get eventType(): string | undefined {
        return this['event_type'];
    }
    public withCategories(categories: Array<string>): TextDetectionReq {
        this['categories'] = categories;
        return this;
    }
    public withGlossaryNames(glossaryNames: Array<string>): TextDetectionReq {
        this['glossary_names'] = glossaryNames;
        return this;
    }
    public set glossaryNames(glossaryNames: Array<string>  | undefined) {
        this['glossary_names'] = glossaryNames;
    }
    public get glossaryNames(): Array<string> | undefined {
        return this['glossary_names'];
    }
    public withData(data: TextDetectionDataReq): TextDetectionReq {
        this['data'] = data;
        return this;
    }
    public withWhiteGlossaryNames(whiteGlossaryNames: Array<string>): TextDetectionReq {
        this['white_glossary_names'] = whiteGlossaryNames;
        return this;
    }
    public set whiteGlossaryNames(whiteGlossaryNames: Array<string>  | undefined) {
        this['white_glossary_names'] = whiteGlossaryNames;
    }
    public get whiteGlossaryNames(): Array<string> | undefined {
        return this['white_glossary_names'];
    }
    public withBizType(bizType: string): TextDetectionReq {
        this['biz_type'] = bizType;
        return this;
    }
    public set bizType(bizType: string  | undefined) {
        this['biz_type'] = bizType;
    }
    public get bizType(): string | undefined {
        return this['biz_type'];
    }
}