import { AcceleratorDetail } from './AcceleratorDetail';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAcceleratorsResponse extends SdkResponse {
    public accelerators?: Array<AcceleratorDetail>;
    private 'page_info'?: PageInfo | undefined;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withAccelerators(accelerators: Array<AcceleratorDetail>): ListAcceleratorsResponse {
        this['accelerators'] = accelerators;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListAcceleratorsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
    public withRequestId(requestId: string): ListAcceleratorsResponse {
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