import { OrgConformancePackResponse } from './OrgConformancePackResponse';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOrganizationConformancePacksResponse extends SdkResponse {
    private 'organization_conformance_packs'?: Array<OrgConformancePackResponse>;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withOrganizationConformancePacks(organizationConformancePacks: Array<OrgConformancePackResponse>): ListOrganizationConformancePacksResponse {
        this['organization_conformance_packs'] = organizationConformancePacks;
        return this;
    }
    public set organizationConformancePacks(organizationConformancePacks: Array<OrgConformancePackResponse>  | undefined) {
        this['organization_conformance_packs'] = organizationConformancePacks;
    }
    public get organizationConformancePacks(): Array<OrgConformancePackResponse> | undefined {
        return this['organization_conformance_packs'];
    }
    public withPageInfo(pageInfo: PageInfo): ListOrganizationConformancePacksResponse {
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