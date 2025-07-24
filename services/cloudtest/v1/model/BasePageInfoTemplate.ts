import { Template } from './Template';


export class BasePageInfoTemplate {
    public total?: number;
    public list?: Array<Template>;
    public limit?: number;
    public offset?: number;
    public pages?: number;
    public size?: number;
    public constructor() { 
    }
    public withTotal(total: number): BasePageInfoTemplate {
        this['total'] = total;
        return this;
    }
    public withList(list: Array<Template>): BasePageInfoTemplate {
        this['list'] = list;
        return this;
    }
    public withLimit(limit: number): BasePageInfoTemplate {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): BasePageInfoTemplate {
        this['offset'] = offset;
        return this;
    }
    public withPages(pages: number): BasePageInfoTemplate {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): BasePageInfoTemplate {
        this['size'] = size;
        return this;
    }
}