
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMessageTemplateDetailsResponse extends SdkResponse {
    private 'message_template_id'?: string | undefined;
    private 'message_template_name'?: string | undefined;
    public protocol?: string;
    private 'tag_names'?: Array<string> | undefined;
    private 'create_time'?: string | undefined;
    private 'update_time'?: string | undefined;
    public content?: string;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withMessageTemplateId(messageTemplateId: string): ListMessageTemplateDetailsResponse {
        this['message_template_id'] = messageTemplateId;
        return this;
    }
    public set messageTemplateId(messageTemplateId: string | undefined) {
        this['message_template_id'] = messageTemplateId;
    }
    public get messageTemplateId() {
        return this['message_template_id'];
    }
    public withMessageTemplateName(messageTemplateName: string): ListMessageTemplateDetailsResponse {
        this['message_template_name'] = messageTemplateName;
        return this;
    }
    public set messageTemplateName(messageTemplateName: string | undefined) {
        this['message_template_name'] = messageTemplateName;
    }
    public get messageTemplateName() {
        return this['message_template_name'];
    }
    public withProtocol(protocol: string): ListMessageTemplateDetailsResponse {
        this['protocol'] = protocol;
        return this;
    }
    public withTagNames(tagNames: Array<string>): ListMessageTemplateDetailsResponse {
        this['tag_names'] = tagNames;
        return this;
    }
    public set tagNames(tagNames: Array<string> | undefined) {
        this['tag_names'] = tagNames;
    }
    public get tagNames() {
        return this['tag_names'];
    }
    public withCreateTime(createTime: string): ListMessageTemplateDetailsResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ListMessageTemplateDetailsResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
    public withContent(content: string): ListMessageTemplateDetailsResponse {
        this['content'] = content;
        return this;
    }
    public withRequestId(requestId: string): ListMessageTemplateDetailsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
}