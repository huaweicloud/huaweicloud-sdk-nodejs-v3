

export class ConsumersInTagEntity {
    public consumers?: Array<string>;
    private 'tag_name'?: string;
    public constructor() { 
    }
    public withConsumers(consumers: Array<string>): ConsumersInTagEntity {
        this['consumers'] = consumers;
        return this;
    }
    public withTagName(tagName: string): ConsumersInTagEntity {
        this['tag_name'] = tagName;
        return this;
    }
    public set tagName(tagName: string  | undefined) {
        this['tag_name'] = tagName;
    }
    public get tagName(): string | undefined {
        return this['tag_name'];
    }
}