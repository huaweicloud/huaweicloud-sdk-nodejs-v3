import { SysTags } from './SysTags';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClusterEnterpriseProjectsResponse extends SdkResponse {
    private 'sys_tags'?: Array<SysTags>;
    public constructor() { 
        super();
    }
    public withSysTags(sysTags: Array<SysTags>): ShowClusterEnterpriseProjectsResponse {
        this['sys_tags'] = sysTags;
        return this;
    }
    public set sysTags(sysTags: Array<SysTags>  | undefined) {
        this['sys_tags'] = sysTags;
    }
    public get sysTags(): Array<SysTags> | undefined {
        return this['sys_tags'];
    }
}