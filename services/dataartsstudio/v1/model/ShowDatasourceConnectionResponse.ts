import { ConnectionClusterInfo } from './ConnectionClusterInfo';
import { ConnectionsHost } from './ConnectionsHost';
import { ConnectionsRoute } from './ConnectionsRoute';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDatasourceConnectionResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    public id?: string;
    public name?: string;
    public status?: string;
    private 'available_cluster_info'?: Array<ConnectionClusterInfo>;
    private 'dest_vpc_id'?: string;
    private 'dest_network_id'?: string;
    private 'create_time'?: number;
    public hosts?: Array<ConnectionsHost>;
    public routes?: Array<ConnectionsRoute>;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ShowDatasourceConnectionResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ShowDatasourceConnectionResponse {
        this['message'] = message;
        return this;
    }
    public withId(id: string): ShowDatasourceConnectionResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowDatasourceConnectionResponse {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): ShowDatasourceConnectionResponse {
        this['status'] = status;
        return this;
    }
    public withAvailableClusterInfo(availableClusterInfo: Array<ConnectionClusterInfo>): ShowDatasourceConnectionResponse {
        this['available_cluster_info'] = availableClusterInfo;
        return this;
    }
    public set availableClusterInfo(availableClusterInfo: Array<ConnectionClusterInfo>  | undefined) {
        this['available_cluster_info'] = availableClusterInfo;
    }
    public get availableClusterInfo(): Array<ConnectionClusterInfo> | undefined {
        return this['available_cluster_info'];
    }
    public withDestVpcId(destVpcId: string): ShowDatasourceConnectionResponse {
        this['dest_vpc_id'] = destVpcId;
        return this;
    }
    public set destVpcId(destVpcId: string  | undefined) {
        this['dest_vpc_id'] = destVpcId;
    }
    public get destVpcId(): string | undefined {
        return this['dest_vpc_id'];
    }
    public withDestNetworkId(destNetworkId: string): ShowDatasourceConnectionResponse {
        this['dest_network_id'] = destNetworkId;
        return this;
    }
    public set destNetworkId(destNetworkId: string  | undefined) {
        this['dest_network_id'] = destNetworkId;
    }
    public get destNetworkId(): string | undefined {
        return this['dest_network_id'];
    }
    public withCreateTime(createTime: number): ShowDatasourceConnectionResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withHosts(hosts: Array<ConnectionsHost>): ShowDatasourceConnectionResponse {
        this['hosts'] = hosts;
        return this;
    }
    public withRoutes(routes: Array<ConnectionsRoute>): ShowDatasourceConnectionResponse {
        this['routes'] = routes;
        return this;
    }
}