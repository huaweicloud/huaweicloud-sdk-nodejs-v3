import { Connections } from './Connections';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVpcepConnectionResponse extends SdkResponse {
    public connections?: Array<Connections>;
    public vpcepUpdateSwitch?: boolean;
    private 'total_count'?: number;
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
}