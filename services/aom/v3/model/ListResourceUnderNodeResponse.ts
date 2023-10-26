
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListResourceUnderNodeResponse extends SdkResponse {
    public data?: Array<object>;
    private 'page_info'?: object;
    public constructor() { 
        super();
    }
    public withData(data: Array<object>): ListResourceUnderNodeResponse {
        this['data'] = data;
        return this;
    }
    public withPageInfo(pageInfo: object): ListResourceUnderNodeResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: object  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): object | undefined {
        return this['page_info'];
    }
}