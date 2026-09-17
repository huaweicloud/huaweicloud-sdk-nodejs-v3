

export class CommentCreateVO {
    public category?: CommentCreateVOCategoryEnum | string;
    private 'issue_category'?: string;
    public description?: string;
    private 'parent_id'?: string;
    private 'root_id'?: string;
    public at?: string;
    public constructor() { 
    }
    public withCategory(category: CommentCreateVOCategoryEnum | string): CommentCreateVO {
        this['category'] = category;
        return this;
    }
    public withIssueCategory(issueCategory: string): CommentCreateVO {
        this['issue_category'] = issueCategory;
        return this;
    }
    public set issueCategory(issueCategory: string  | undefined) {
        this['issue_category'] = issueCategory;
    }
    public get issueCategory(): string | undefined {
        return this['issue_category'];
    }
    public withDescription(description: string): CommentCreateVO {
        this['description'] = description;
        return this;
    }
    public withParentId(parentId: string): CommentCreateVO {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withRootId(rootId: string): CommentCreateVO {
        this['root_id'] = rootId;
        return this;
    }
    public set rootId(rootId: string  | undefined) {
        this['root_id'] = rootId;
    }
    public get rootId(): string | undefined {
        return this['root_id'];
    }
    public withAt(at: string): CommentCreateVO {
        this['at'] = at;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CommentCreateVOCategoryEnum {
    COMMENT = 'comment',
    REPLY = 'reply'
}
