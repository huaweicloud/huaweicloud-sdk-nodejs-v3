
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SendKafkaMessageResponse extends SdkResponse {
    public topic?: string;
    public body?: string;
    private 'property_list'?: Array<object>;
    public constructor() { 
        super();
    }
    public withTopic(topic: string): SendKafkaMessageResponse {
        this['topic'] = topic;
        return this;
    }
    public withBody(body: string): SendKafkaMessageResponse {
        this['body'] = body;
        return this;
    }
    public withPropertyList(propertyList: Array<object>): SendKafkaMessageResponse {
        this['property_list'] = propertyList;
        return this;
    }
    public set propertyList(propertyList: Array<object>  | undefined) {
        this['property_list'] = propertyList;
    }
    public get propertyList(): Array<object> | undefined {
        return this['property_list'];
    }
}