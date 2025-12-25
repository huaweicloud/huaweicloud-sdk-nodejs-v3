

export class Parser {
    private 'channel_refer_count'?: number;
    public description?: string;
    private 'parser_id'?: string;
    public title?: string;
    public constructor() { 
    }
    public withChannelReferCount(channelReferCount: number): Parser {
        this['channel_refer_count'] = channelReferCount;
        return this;
    }
    public set channelReferCount(channelReferCount: number  | undefined) {
        this['channel_refer_count'] = channelReferCount;
    }
    public get channelReferCount(): number | undefined {
        return this['channel_refer_count'];
    }
    public withDescription(description: string): Parser {
        this['description'] = description;
        return this;
    }
    public withParserId(parserId: string): Parser {
        this['parser_id'] = parserId;
        return this;
    }
    public set parserId(parserId: string  | undefined) {
        this['parser_id'] = parserId;
    }
    public get parserId(): string | undefined {
        return this['parser_id'];
    }
    public withTitle(title: string): Parser {
        this['title'] = title;
        return this;
    }
}