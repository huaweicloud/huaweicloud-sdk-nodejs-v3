import { DeleteSearchCriterias } from './DeleteSearchCriterias';


export class DeleteSearchCriteriasRequest {
    private 'group_id'?: string;
    private 'topic_id'?: string;
    private 'Content-Type'?: string;
    public body?: DeleteSearchCriterias;
    public constructor(groupId?: string, topicId?: string, contentType?: string) { 
        this['group_id'] = groupId;
        this['topic_id'] = topicId;
        this['Content-Type'] = contentType;
    }
    public withGroupId(groupId: string): DeleteSearchCriteriasRequest {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withTopicId(topicId: string): DeleteSearchCriteriasRequest {
        this['topic_id'] = topicId;
        return this;
    }
    public set topicId(topicId: string  | undefined) {
        this['topic_id'] = topicId;
    }
    public get topicId(): string | undefined {
        return this['topic_id'];
    }
    public withContentType(contentType: string): DeleteSearchCriteriasRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: DeleteSearchCriterias): DeleteSearchCriteriasRequest {
        this['body'] = body;
        return this;
    }
}