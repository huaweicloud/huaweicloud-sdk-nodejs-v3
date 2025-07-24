import { Review } from './Review';


export class BasePageInfoReview {
    public total?: number;
    public list?: Array<Review>;
    public offset?: number;
    public limit?: number;
    public pages?: number;
    public size?: number;
    public constructor() { 
    }
    public withTotal(total: number): BasePageInfoReview {
        this['total'] = total;
        return this;
    }
    public withList(list: Array<Review>): BasePageInfoReview {
        this['list'] = list;
        return this;
    }
    public withOffset(offset: number): BasePageInfoReview {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): BasePageInfoReview {
        this['limit'] = limit;
        return this;
    }
    public withPages(pages: number): BasePageInfoReview {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): BasePageInfoReview {
        this['size'] = size;
        return this;
    }
}