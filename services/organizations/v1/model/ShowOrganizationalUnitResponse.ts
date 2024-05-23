import { OrganizationalUnitDto } from './OrganizationalUnitDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowOrganizationalUnitResponse extends SdkResponse {
    private 'organizational_unit'?: OrganizationalUnitDto;
    public constructor() { 
        super();
    }
    public withOrganizationalUnit(organizationalUnit: OrganizationalUnitDto): ShowOrganizationalUnitResponse {
        this['organizational_unit'] = organizationalUnit;
        return this;
    }
    public set organizationalUnit(organizationalUnit: OrganizationalUnitDto  | undefined) {
        this['organizational_unit'] = organizationalUnit;
    }
    public get organizationalUnit(): OrganizationalUnitDto | undefined {
        return this['organizational_unit'];
    }
}