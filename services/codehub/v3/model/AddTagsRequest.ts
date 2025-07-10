

export class AddTagsRequest {
    private 'tag_name'?: string;
    public ref?: string;
    public message?: string;
    public constructor(tagName?: string, ref?: string) { 
        this['tag_name'] = tagName;
        this['ref'] = ref;
    }
    public withTagName(tagName: string): AddTagsRequest {
        this['tag_name'] = tagName;
        return this;
    }
    public set tagName(tagName: string  | undefined) {
        this['tag_name'] = tagName;
    }
    public get tagName(): string | undefined {
        return this['tag_name'];
    }
    public withRef(ref: string): AddTagsRequest {
        this['ref'] = ref;
        return this;
    }
    public withMessage(message: string): AddTagsRequest {
        this['message'] = message;
        return this;
    }
}