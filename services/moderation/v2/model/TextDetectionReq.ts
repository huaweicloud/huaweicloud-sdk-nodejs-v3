import { TextDetectionItemsReq } from './TextDetectionItemsReq';


export class TextDetectionReq {
    public categories?: Array<string>;
    public items: Array<TextDetectionItemsReq>;
    public constructor(items?: any) { 
        this['items'] = items;
    }
    public withCategories(categories: Array<string>): TextDetectionReq {
        this['categories'] = categories;
        return this;
    }
    public withItems(items: Array<TextDetectionItemsReq>): TextDetectionReq {
        this['items'] = items;
        return this;
    }
}