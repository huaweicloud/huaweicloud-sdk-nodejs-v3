import { ManagedOrganizationalUnit } from './ManagedOrganizationalUnit';
import { PageInfoDto } from './PageInfoDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListManagedOrganizationalUnitsResponse extends SdkResponse {
    private 'managed_organizational_units'?: Array<ManagedOrganizationalUnit>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withManagedOrganizationalUnits(managedOrganizationalUnits: Array<ManagedOrganizationalUnit>): ListManagedOrganizationalUnitsResponse {
        this['managed_organizational_units'] = managedOrganizationalUnits;
        return this;
    }
    public set managedOrganizationalUnits(managedOrganizationalUnits: Array<ManagedOrganizationalUnit>  | undefined) {
        this['managed_organizational_units'] = managedOrganizationalUnits;
    }
    public get managedOrganizationalUnits(): Array<ManagedOrganizationalUnit> | undefined {
        return this['managed_organizational_units'];
    }
    public withPageInfo(pageInfo: PageInfoDto): ListManagedOrganizationalUnitsResponse {
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