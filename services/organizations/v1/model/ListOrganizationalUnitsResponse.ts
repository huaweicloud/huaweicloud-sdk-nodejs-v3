import { OrganizationalUnitDto } from './OrganizationalUnitDto';
import { PageInfoDto } from './PageInfoDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListOrganizationalUnitsResponse extends SdkResponse {
    private 'organizational_units'?: Array<OrganizationalUnitDto>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withOrganizationalUnits(organizationalUnits: Array<OrganizationalUnitDto>): ListOrganizationalUnitsResponse {
        this['organizational_units'] = organizationalUnits;
        return this;
    }
    public set organizationalUnits(organizationalUnits: Array<OrganizationalUnitDto>  | undefined) {
        this['organizational_units'] = organizationalUnits;
    }
    public get organizationalUnits(): Array<OrganizationalUnitDto> | undefined {
        return this['organizational_units'];
    }
    public withPageInfo(pageInfo: PageInfoDto): ListOrganizationalUnitsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDto  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDto | undefined {
        return this['page_info'];
    }
}