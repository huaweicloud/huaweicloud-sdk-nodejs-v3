

export class AttentionDO {
    public attention?: string;
    public ids?: Array<string>;
    public format?: string;
    public constructor(attention?: string, ids?: Array<string>) { 
        this['attention'] = attention;
        this['ids'] = ids;
    }
    public withAttention(attention: string): AttentionDO {
        this['attention'] = attention;
        return this;
    }
    public withIds(ids: Array<string>): AttentionDO {
        this['ids'] = ids;
        return this;
    }
    public withFormat(format: string): AttentionDO {
        this['format'] = format;
        return this;
    }
}