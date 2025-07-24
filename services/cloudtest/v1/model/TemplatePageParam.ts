

export class TemplatePageParam {
    private 'creator_num'?: string;
    public offset?: number;
    public limit?: number;
    public name?: string;
    public constructor() { 
    }
    public withCreatorNum(creatorNum: string): TemplatePageParam {
        this['creator_num'] = creatorNum;
        return this;
    }
    public set creatorNum(creatorNum: string  | undefined) {
        this['creator_num'] = creatorNum;
    }
    public get creatorNum(): string | undefined {
        return this['creator_num'];
    }
    public withOffset(offset: number): TemplatePageParam {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): TemplatePageParam {
        this['limit'] = limit;
        return this;
    }
    public withName(name: string): TemplatePageParam {
        this['name'] = name;
        return this;
    }
}