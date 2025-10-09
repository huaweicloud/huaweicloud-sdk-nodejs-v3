import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRegisteredServicesForAuthSchemaV5Response extends SdkResponse {
    private 'service_codes'?: Array<string>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withServiceCodes(serviceCodes: Array<string>): ListRegisteredServicesForAuthSchemaV5Response {
        this['service_codes'] = serviceCodes;
        return this;
    }
    public set serviceCodes(serviceCodes: Array<string>  | undefined) {
        this['service_codes'] = serviceCodes;
    }
    public get serviceCodes(): Array<string> | undefined {
        return this['service_codes'];
    }
    public withPageInfo(pageInfo: PageInfo): ListRegisteredServicesForAuthSchemaV5Response {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}