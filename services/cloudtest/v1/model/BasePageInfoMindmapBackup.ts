import { MindmapBackup } from './MindmapBackup';


export class BasePageInfoMindmapBackup {
    public total?: number;
    public list?: Array<MindmapBackup>;
    public limit?: number;
    public offset?: number;
    public pages?: number;
    public size?: number;
    public constructor() { 
    }
    public withTotal(total: number): BasePageInfoMindmapBackup {
        this['total'] = total;
        return this;
    }
    public withList(list: Array<MindmapBackup>): BasePageInfoMindmapBackup {
        this['list'] = list;
        return this;
    }
    public withLimit(limit: number): BasePageInfoMindmapBackup {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): BasePageInfoMindmapBackup {
        this['offset'] = offset;
        return this;
    }
    public withPages(pages: number): BasePageInfoMindmapBackup {
        this['pages'] = pages;
        return this;
    }
    public withSize(size: number): BasePageInfoMindmapBackup {
        this['size'] = size;
        return this;
    }
}