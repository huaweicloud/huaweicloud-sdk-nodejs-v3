import { Scene } from './Scene';


export class BasePageInfoScene {
    public limit?: number;
    public list?: Array<Scene>;
    public offset?: number;
    public pages?: number;
    public size?: number;
    public total?: number;
    public constructor() { 
    }
    public withLimit(limit: number): BasePageInfoScene {
        this['limit'] = limit;
        return this;
    }
    public withList(list: Array<Scene>): BasePageInfoScene {
        this['list'] = list;
        return this;
    }
    public withOffset(offset: number): BasePageInfoScene {
        this['offset'] = offset;
        return this;
    }
    public withPages(pages: number): BasePageInfoScene {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): BasePageInfoScene {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): BasePageInfoScene {
        this['total'] = total;
        return this;
    }
}