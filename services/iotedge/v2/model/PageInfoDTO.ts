

export class PageInfoDTO {
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: number): PageInfoDTO {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): PageInfoDTO {
        this['limit'] = limit;
        return this;
    }
}