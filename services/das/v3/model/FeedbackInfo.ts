

export class FeedbackInfo {
    public id?: string;
    private 'project_id'?: string;
    private 'message_id'?: string;
    private 'feedback_grade'?: string;
    private 'feedback_content'?: string;
    private 'gmt_created'?: number;
    private 'gmt_modified'?: number;
    public constructor() { 
    }
    public withId(id: string): FeedbackInfo {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): FeedbackInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withMessageId(messageId: string): FeedbackInfo {
        this['message_id'] = messageId;
        return this;
    }
    public set messageId(messageId: string  | undefined) {
        this['message_id'] = messageId;
    }
    public get messageId(): string | undefined {
        return this['message_id'];
    }
    public withFeedbackGrade(feedbackGrade: string): FeedbackInfo {
        this['feedback_grade'] = feedbackGrade;
        return this;
    }
    public set feedbackGrade(feedbackGrade: string  | undefined) {
        this['feedback_grade'] = feedbackGrade;
    }
    public get feedbackGrade(): string | undefined {
        return this['feedback_grade'];
    }
    public withFeedbackContent(feedbackContent: string): FeedbackInfo {
        this['feedback_content'] = feedbackContent;
        return this;
    }
    public set feedbackContent(feedbackContent: string  | undefined) {
        this['feedback_content'] = feedbackContent;
    }
    public get feedbackContent(): string | undefined {
        return this['feedback_content'];
    }
    public withGmtCreated(gmtCreated: number): FeedbackInfo {
        this['gmt_created'] = gmtCreated;
        return this;
    }
    public set gmtCreated(gmtCreated: number  | undefined) {
        this['gmt_created'] = gmtCreated;
    }
    public get gmtCreated(): number | undefined {
        return this['gmt_created'];
    }
    public withGmtModified(gmtModified: number): FeedbackInfo {
        this['gmt_modified'] = gmtModified;
        return this;
    }
    public set gmtModified(gmtModified: number  | undefined) {
        this['gmt_modified'] = gmtModified;
    }
    public get gmtModified(): number | undefined {
        return this['gmt_modified'];
    }
}