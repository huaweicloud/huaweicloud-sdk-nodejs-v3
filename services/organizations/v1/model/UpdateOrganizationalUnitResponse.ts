import { OrganizationalUnitDto } from './OrganizationalUnitDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateOrganizationalUnitResponse extends SdkResponse {
    private 'organizational_unit'?: OrganizationalUnitDto;
    public constructor() { 
        super();
    }
    public withOrganizationalUnit(organizationalUnit: OrganizationalUnitDto): UpdateOrganizationalUnitResponse {
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