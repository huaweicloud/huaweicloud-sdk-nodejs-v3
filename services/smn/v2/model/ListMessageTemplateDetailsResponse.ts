
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMessageTemplateDetailsResponse extends SdkResponse {
    private 'message_template_id'?: string;
    private 'message_template_name'?: string;
    public protocol?: string;
    private 'tag_names'?: Array<string>;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public content?: string;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withMessageTemplateId(messageTemplateId: string): ListMessageTemplateDetailsResponse {
        this['message_template_id'] = messageTemplateId;
        return this;
    }
    public set messageTemplateId(messageTemplateId: string  | undefined) {
        this['message_template_id'] = messageTemplateId;
    }
    public get messageTemplateId(): string | undefined {
        return this['message_template_id'];
    }
    public withMessageTemplateName(messageTemplateName: string): ListMessageTemplateDetailsResponse {
        this['message_template_name'] = messageTemplateName;
        return this;
    }
    public set messageTemplateName(messageTemplateName: string  | undefined) {
        this['message_template_name'] = messageTemplateName;
    }
    public get messageTemplateName(): string | undefined {
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
    public set tagNames(tagNames: Array<string>  | undefined) {
        this['tag_names'] = tagNames;
    }
    public get tagNames(): Array<string> | undefined {
        return this['tag_names'];
    }
    public withCreateTime(createTime: string): ListMessageTemplateDetailsResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ListMessageTemplateDetailsResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
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
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}