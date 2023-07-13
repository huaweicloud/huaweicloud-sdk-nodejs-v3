

export class TopicCategory {
    private 'topic_id'?: string | undefined;
    private 'topic_name'?: string | undefined;
    private 'category_id'?: string | undefined;
    private 'category_name'?: string | undefined;
    public constructor() { 
    }
    public withTopicId(topicId: string): TopicCategory {
        this['topic_id'] = topicId;
        return this;
    }
    public set topicId(topicId: string | undefined) {
        this['topic_id'] = topicId;
    }
    public get topicId() {
        return this['topic_id'];
    }
    public withTopicName(topicName: string): TopicCategory {
        this['topic_name'] = topicName;
        return this;
    }
    public set topicName(topicName: string | undefined) {
        this['topic_name'] = topicName;
    }
    public get topicName() {
        return this['topic_name'];
    }
    public withCategoryId(categoryId: string): TopicCategory {
        this['category_id'] = categoryId;
        return this;
    }
    public set categoryId(categoryId: string | undefined) {
        this['category_id'] = categoryId;
    }
    public get categoryId() {
        return this['category_id'];
    }
    public withCategoryName(categoryName: string): TopicCategory {
        this['category_name'] = categoryName;
        return this;
    }
    public set categoryName(categoryName: string | undefined) {
        this['category_name'] = categoryName;
    }
    public get categoryName() {
        return this['category_name'];
    }
}