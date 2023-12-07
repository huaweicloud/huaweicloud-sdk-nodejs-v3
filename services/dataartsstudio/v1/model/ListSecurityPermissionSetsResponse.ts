import { PermissionSet } from './PermissionSet';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityPermissionSetsResponse extends SdkResponse {
    public total?: number;
    private 'permission_sets'?: Array<PermissionSet>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSecurityPermissionSetsResponse {
        this['total'] = total;
        return this;
    }
    public withPermissionSets(permissionSets: Array<PermissionSet>): ListSecurityPermissionSetsResponse {
        this['permission_sets'] = permissionSets;
        return this;
    }
    public set permissionSets(permissionSets: Array<PermissionSet>  | undefined) {
        this['permission_sets'] = permissionSets;
    }
    public get permissionSets(): Array<PermissionSet> | undefined {
        return this['permission_sets'];
    }
}