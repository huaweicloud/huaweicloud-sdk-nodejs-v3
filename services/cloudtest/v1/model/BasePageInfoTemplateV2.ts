import { TemplateV2 } from './TemplateV2';


export class BasePageInfoTemplateV2 {
    public limit?: number;
    public list?: Array<TemplateV2>;
    public offset?: number;
    public pages?: number;
    public size?: number;
    public total?: number;
    public constructor() { 
    }
    public withLimit(limit: number): BasePageInfoTemplateV2 {
        this['limit'] = limit;
        return this;
    }
    public withList(list: Array<TemplateV2>): BasePageInfoTemplateV2 {
        this['list'] = list;
        return this;
    }
    public withOffset(offset: number): BasePageInfoTemplateV2 {
        this['offset'] = offset;
        return this;
    }
    public withPages(pages: number): BasePageInfoTemplateV2 {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): BasePageInfoTemplateV2 {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): BasePageInfoTemplateV2 {
        this['total'] = total;
        return this;
    }
}