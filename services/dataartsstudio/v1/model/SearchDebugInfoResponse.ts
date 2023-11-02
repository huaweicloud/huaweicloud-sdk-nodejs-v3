import { ApiPublishDTO } from './ApiPublishDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchDebugInfoResponse extends SdkResponse {
    public total?: number;
    private 'publish_messages'?: Array<ApiPublishDTO>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): SearchDebugInfoResponse {
        this['total'] = total;
        return this;
    }
    public withPublishMessages(publishMessages: Array<ApiPublishDTO>): SearchDebugInfoResponse {
        this['publish_messages'] = publishMessages;
        return this;
    }
    public set publishMessages(publishMessages: Array<ApiPublishDTO>  | undefined) {
        this['publish_messages'] = publishMessages;
    }
    public get publishMessages(): Array<ApiPublishDTO> | undefined {
        return this['publish_messages'];
    }
}