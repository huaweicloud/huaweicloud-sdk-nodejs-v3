import { TextDetectionItemsReq } from './TextDetectionItemsReq';


export class TextDetectionReq {
    public categories?: Array<string>;
    private 'white_glossaries'?: Array<string> | undefined;
    public items: Array<TextDetectionItemsReq>;
    public constructor(items?: any) { 
        this['items'] = items;
    }
    public withCategories(categories: Array<string>): TextDetectionReq {
        this['categories'] = categories;
        return this;
    }
    public withWhiteGlossaries(whiteGlossaries: Array<string>): TextDetectionReq {
        this['white_glossaries'] = whiteGlossaries;
        return this;
    }
    public set whiteGlossaries(whiteGlossaries: Array<string> | undefined) {
        this['white_glossaries'] = whiteGlossaries;
    }
    public get whiteGlossaries() {
        return this['white_glossaries'];
    }
    public withItems(items: Array<TextDetectionItemsReq>): TextDetectionReq {
        this['items'] = items;
        return this;
    }
}