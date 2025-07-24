import { TestPoint } from './TestPoint';


export class BasePageInfoTestPoint {
    public limit?: number;
    public list?: Array<TestPoint>;
    public offset?: number;
    public pages?: number;
    public size?: number;
    public total?: number;
    public constructor() { 
    }
    public withLimit(limit: number): BasePageInfoTestPoint {
        this['limit'] = limit;
        return this;
    }
    public withList(list: Array<TestPoint>): BasePageInfoTestPoint {
        this['list'] = list;
        return this;
    }
    public withOffset(offset: number): BasePageInfoTestPoint {
        this['offset'] = offset;
        return this;
    }
    public withPages(pages: number): BasePageInfoTestPoint {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): BasePageInfoTestPoint {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): BasePageInfoTestPoint {
        this['total'] = total;
        return this;
    }
}