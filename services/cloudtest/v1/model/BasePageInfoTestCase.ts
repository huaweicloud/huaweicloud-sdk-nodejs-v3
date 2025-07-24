import { TestCase } from './TestCase';


export class BasePageInfoTestCase {
    public limit?: number;
    public list?: Array<TestCase>;
    public offset?: number;
    public pages?: number;
    public size?: number;
    public total?: number;
    public constructor() { 
    }
    public withLimit(limit: number): BasePageInfoTestCase {
        this['limit'] = limit;
        return this;
    }
    public withList(list: Array<TestCase>): BasePageInfoTestCase {
        this['list'] = list;
        return this;
    }
    public withOffset(offset: number): BasePageInfoTestCase {
        this['offset'] = offset;
        return this;
    }
    public withPages(pages: number): BasePageInfoTestCase {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): BasePageInfoTestCase {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): BasePageInfoTestCase {
        this['total'] = total;
        return this;
    }
}