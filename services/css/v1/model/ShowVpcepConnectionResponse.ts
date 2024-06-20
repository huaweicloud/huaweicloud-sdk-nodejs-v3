import { Connections } from './Connections';
import { PermissionInfo } from './PermissionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVpcepConnectionResponse extends SdkResponse {
    public connections?: Array<Connections>;
    public vpcepUpdateSwitch?: boolean;
    private 'total_count'?: number;
    public vpcServiceName?: string;
    public permissions?: Array<PermissionInfo>;
    public constructor() { 
        super();
    }
    public withConnections(connections: Array<Connections>): ShowVpcepConnectionResponse {
        this['connections'] = connections;
        return this;
    }
    public withVpcepUpdateSwitch(vpcepUpdateSwitch: boolean): ShowVpcepConnectionResponse {
        this['vpcepUpdateSwitch'] = vpcepUpdateSwitch;
        return this;
    }
    public withTotalCount(totalCount: number): ShowVpcepConnectionResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withVpcServiceName(vpcServiceName: string): ShowVpcepConnectionResponse {
        this['vpcServiceName'] = vpcServiceName;
        return this;
    }
    public withPermissions(permissions: Array<PermissionInfo>): ShowVpcepConnectionResponse {
        this['permissions'] = permissions;
        return this;
    }
}