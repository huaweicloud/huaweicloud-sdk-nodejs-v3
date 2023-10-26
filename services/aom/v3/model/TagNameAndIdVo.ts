

export class TagNameAndIdVo {
    private 'tag_id'?: string;
    private 'tag_name'?: string;
    public constructor() { 
    }
    public withTagId(tagId: string): TagNameAndIdVo {
        this['tag_id'] = tagId;
        return this;
    }
    public set tagId(tagId: string  | undefined) {
        this['tag_id'] = tagId;
    }
    public get tagId(): string | undefined {
        return this['tag_id'];
    }
    public withTagName(tagName: string): TagNameAndIdVo {
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