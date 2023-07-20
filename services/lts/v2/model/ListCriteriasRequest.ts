

export class ListCriteriasRequest {
    private 'group_id'?: string;
    private 'topic_id'?: string;
    private 'Content-Type'?: string;
    private 'search_type'?: string;
    public constructor(groupId?: string, topicId?: string) { 
        this['group_id'] = groupId;
        this['topic_id'] = topicId;
    }
    public withGroupId(groupId: string): ListCriteriasRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withTopicId(topicId: string): ListCriteriasRequest {
        this['topic_id'] = topicId;
        return this;
    }
    public set topicId(topicId: string  | undefined) {
        this['topic_id'] = topicId;
    }
    public get topicId(): string | undefined {
        return this['topic_id'];
    }
    public withContentType(contentType: string): ListCriteriasRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withSearchType(searchType: string): ListCriteriasRequest {
        this['search_type'] = searchType;
        return this;
    }
    public set searchType(searchType: string  | undefined) {
        this['search_type'] = searchType;
    }
    public get searchType(): string | undefined {
        return this['search_type'];
    }
}