import { Tag } from './Tag';


export class UpdatePtrReq {
    public ptrdname?: string;
    public description?: string;
    public ttl?: number;
    public tags?: Array<Tag>;
    public constructor(ptrdname?: string) { 
        this['ptrdname'] = ptrdname;
    }
    public withPtrdname(ptrdname: string): UpdatePtrReq {
        this['ptrdname'] = ptrdname;
        return this;
    }
    public withDescription(description: string): UpdatePtrReq {
        this['description'] = description;
        return this;
    }
    public withTtl(ttl: number): UpdatePtrReq {
        this['ttl'] = ttl;
        return this;
    }
    public withTags(tags: Array<Tag>): UpdatePtrReq {
        this['tags'] = tags;
        return this;
    }
}