import { UpdateLogtankRequestBody } from './UpdateLogtankRequestBody';


export class UpdateLogtankRequest {
    private 'topic_urn'?: string;
    private 'logtank_id'?: string;
    public body?: UpdateLogtankRequestBody;
    public constructor(topicUrn?: string, logtankId?: string) { 
        this['topic_urn'] = topicUrn;
        this['logtank_id'] = logtankId;
    }
    public withTopicUrn(topicUrn: string): UpdateLogtankRequest {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withLogtankId(logtankId: string): UpdateLogtankRequest {
        this['logtank_id'] = logtankId;
        return this;
    }
    public set logtankId(logtankId: string  | undefined) {
        this['logtank_id'] = logtankId;
    }
    public get logtankId(): string | undefined {
        return this['logtank_id'];
    }
    public withBody(body: UpdateLogtankRequestBody): UpdateLogtankRequest {
        this['body'] = body;
        return this;
    }
}