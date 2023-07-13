import { Message } from './Message';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExportDlqMessageResponse extends SdkResponse {
    public body?: Array<Message>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<Message>): ExportDlqMessageResponse {
        this['body'] = body;
        return this;
    }
}