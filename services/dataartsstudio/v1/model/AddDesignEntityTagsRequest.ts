

export class AddDesignEntityTagsRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    private 'entity_id'?: string;
    private 'attr_id'?: string;
    public tags?: Array<string>;
    public constructor(workspace?: string, entityId?: string, tags?: Array<string>) { 
        this['workspace'] = workspace;
        this['entity_id'] = entityId;
        this['tags'] = tags;
    }
    public withWorkspace(workspace: string): AddDesignEntityTagsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): AddDesignEntityTagsRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): AddDesignEntityTagsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withEntityId(entityId: string): AddDesignEntityTagsRequest {
        this['entity_id'] = entityId;
        return this;
    }
    public set entityId(entityId: string  | undefined) {
        this['entity_id'] = entityId;
    }
    public get entityId(): string | undefined {
        return this['entity_id'];
    }
    public withAttrId(attrId: string): AddDesignEntityTagsRequest {
        this['attr_id'] = attrId;
        return this;
    }
    public set attrId(attrId: string  | undefined) {
        this['attr_id'] = attrId;
    }
    public get attrId(): string | undefined {
        return this['attr_id'];
    }
    public withTags(tags: Array<string>): AddDesignEntityTagsRequest {
        this['tags'] = tags;
        return this;
    }
}