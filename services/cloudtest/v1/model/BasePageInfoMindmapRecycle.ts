import { MindmapRecycle } from './MindmapRecycle';


export class BasePageInfoMindmapRecycle {
    public total?: number;
    public list?: Array<MindmapRecycle>;
    public limit?: number;
    public offset?: number;
    public pages?: number;
    public size?: number;
    public constructor() { 
    }
    public withTotal(total: number): BasePageInfoMindmapRecycle {
        this['total'] = total;
        return this;
    }
    public withList(list: Array<MindmapRecycle>): BasePageInfoMindmapRecycle {
        this['list'] = list;
        return this;
    }
    public withLimit(limit: number): BasePageInfoMindmapRecycle {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): BasePageInfoMindmapRecycle {
        this['offset'] = offset;
        return this;
    }
    public withPages(pages: number): BasePageInfoMindmapRecycle {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): BasePageInfoMindmapRecycle {
        this['size'] = size;
        return this;
    }
}