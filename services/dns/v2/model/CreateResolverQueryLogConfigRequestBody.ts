import { Vpc } from './Vpc';


export class CreateResolverQueryLogConfigRequestBody {
    private 'lts_group_id'?: string;
    private 'lts_topic_id'?: string;
    public vpc?: Vpc;
    public constructor(ltsGroupId?: string, ltsTopicId?: string, vpc?: Vpc) { 
        this['lts_group_id'] = ltsGroupId;
        this['lts_topic_id'] = ltsTopicId;
        this['vpc'] = vpc;
    }
    public withLtsGroupId(ltsGroupId: string): CreateResolverQueryLogConfigRequestBody {
        this['lts_group_id'] = ltsGroupId;
        return this;
    }
    public set ltsGroupId(ltsGroupId: string  | undefined) {
        this['lts_group_id'] = ltsGroupId;
    }
    public get ltsGroupId(): string | undefined {
        return this['lts_group_id'];
    }
    public withLtsTopicId(ltsTopicId: string): CreateResolverQueryLogConfigRequestBody {
        this['lts_topic_id'] = ltsTopicId;
        return this;
    }
    public set ltsTopicId(ltsTopicId: string  | undefined) {
        this['lts_topic_id'] = ltsTopicId;
    }
    public get ltsTopicId(): string | undefined {
        return this['lts_topic_id'];
    }
    public withVpc(vpc: Vpc): CreateResolverQueryLogConfigRequestBody {
        this['vpc'] = vpc;
        return this;
    }
}