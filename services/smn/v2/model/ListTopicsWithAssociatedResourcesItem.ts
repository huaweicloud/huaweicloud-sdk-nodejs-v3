import { LogtankItem } from './LogtankItem';
import { ResourceTag } from './ResourceTag';
import { TopicAccessPolicyAttribute } from './TopicAccessPolicyAttribute';


export class ListTopicsWithAssociatedResourcesItem {
    private 'topic_urn'?: string;
    public name?: string;
    private 'display_name'?: string;
    private 'push_policy'?: number;
    private 'enterprise_project_id'?: string;
    private 'topic_id'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public tags?: Array<ResourceTag>;
    public attributes?: TopicAccessPolicyAttribute;
    public logtanks?: Array<LogtankItem>;
    public constructor(topicUrn?: string, name?: string, displayName?: string, pushPolicy?: number, enterpriseProjectId?: string, topicId?: string, createTime?: string, updateTime?: string, tags?: Array<ResourceTag>, attributes?: TopicAccessPolicyAttribute, logtanks?: Array<LogtankItem>) { 
        this['topic_urn'] = topicUrn;
        this['name'] = name;
        this['display_name'] = displayName;
        this['push_policy'] = pushPolicy;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['topic_id'] = topicId;
        this['create_time'] = createTime;
        this['update_time'] = updateTime;
        this['tags'] = tags;
        this['attributes'] = attributes;
        this['logtanks'] = logtanks;
    }
    public withTopicUrn(topicUrn: string): ListTopicsWithAssociatedResourcesItem {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withName(name: string): ListTopicsWithAssociatedResourcesItem {
        this['name'] = name;
        return this;
    }
    public withDisplayName(displayName: string): ListTopicsWithAssociatedResourcesItem {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withPushPolicy(pushPolicy: number): ListTopicsWithAssociatedResourcesItem {
        this['push_policy'] = pushPolicy;
        return this;
    }
    public set pushPolicy(pushPolicy: number  | undefined) {
        this['push_policy'] = pushPolicy;
    }
    public get pushPolicy(): number | undefined {
        return this['push_policy'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListTopicsWithAssociatedResourcesItem {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTopicId(topicId: string): ListTopicsWithAssociatedResourcesItem {
        this['topic_id'] = topicId;
        return this;
    }
    public set topicId(topicId: string  | undefined) {
        this['topic_id'] = topicId;
    }
    public get topicId(): string | undefined {
        return this['topic_id'];
    }
    public withCreateTime(createTime: string): ListTopicsWithAssociatedResourcesItem {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ListTopicsWithAssociatedResourcesItem {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withTags(tags: Array<ResourceTag>): ListTopicsWithAssociatedResourcesItem {
        this['tags'] = tags;
        return this;
    }
    public withAttributes(attributes: TopicAccessPolicyAttribute): ListTopicsWithAssociatedResourcesItem {
        this['attributes'] = attributes;
        return this;
    }
    public withLogtanks(logtanks: Array<LogtankItem>): ListTopicsWithAssociatedResourcesItem {
        this['logtanks'] = logtanks;
        return this;
    }
}