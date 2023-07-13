
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTopicDetailsResponse extends SdkResponse {
    private 'update_time'?: string | undefined;
    private 'push_policy'?: number | undefined;
    private 'create_time'?: string | undefined;
    public name?: string;
    private 'topic_urn'?: string | undefined;
    private 'display_name'?: string | undefined;
    private 'request_id'?: string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'topic_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withUpdateTime(updateTime: string): ListTopicDetailsResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
    public withPushPolicy(pushPolicy: number): ListTopicDetailsResponse {
        this['push_policy'] = pushPolicy;
        return this;
    }
    public set pushPolicy(pushPolicy: number | undefined) {
        this['push_policy'] = pushPolicy;
    }
    public get pushPolicy() {
        return this['push_policy'];
    }
    public withCreateTime(createTime: string): ListTopicDetailsResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withName(name: string): ListTopicDetailsResponse {
        this['name'] = name;
        return this;
    }
    public withTopicUrn(topicUrn: string): ListTopicDetailsResponse {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn() {
        return this['topic_urn'];
    }
    public withDisplayName(displayName: string): ListTopicDetailsResponse {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName() {
        return this['display_name'];
    }
    public withRequestId(requestId: string): ListTopicDetailsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListTopicDetailsResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withTopicId(topicId: string): ListTopicDetailsResponse {
        this['topic_id'] = topicId;
        return this;
    }
    public set topicId(topicId: string | undefined) {
        this['topic_id'] = topicId;
    }
    public get topicId() {
        return this['topic_id'];
    }
}