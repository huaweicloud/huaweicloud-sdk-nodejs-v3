import { AvailableQueueInfo } from './AvailableQueueInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDatasourceConnectionResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'connection_id'?: string;
    public destination?: string;
    public state?: string;
    public process?: number;
    public name?: string;
    private 'connection_url'?: string;
    private 'cluster_name'?: string;
    public service?: string;
    private 'create_time'?: number;
    private 'available_queue_info'?: Array<AvailableQueueInfo>;
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
    public withConnectionId(connectionId: string): ShowDatasourceConnectionResponse {
        this['connection_id'] = connectionId;
        return this;
    }
    public set connectionId(connectionId: string  | undefined) {
        this['connection_id'] = connectionId;
    }
    public get connectionId(): string | undefined {
        return this['connection_id'];
    }
    public withDestination(destination: string): ShowDatasourceConnectionResponse {
        this['destination'] = destination;
        return this;
    }
    public withState(state: string): ShowDatasourceConnectionResponse {
        this['state'] = state;
        return this;
    }
    public withProcess(process: number): ShowDatasourceConnectionResponse {
        this['process'] = process;
        return this;
    }
    public withName(name: string): ShowDatasourceConnectionResponse {
        this['name'] = name;
        return this;
    }
    public withConnectionUrl(connectionUrl: string): ShowDatasourceConnectionResponse {
        this['connection_url'] = connectionUrl;
        return this;
    }
    public set connectionUrl(connectionUrl: string  | undefined) {
        this['connection_url'] = connectionUrl;
    }
    public get connectionUrl(): string | undefined {
        return this['connection_url'];
    }
    public withClusterName(clusterName: string): ShowDatasourceConnectionResponse {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withService(service: string): ShowDatasourceConnectionResponse {
        this['service'] = service;
        return this;
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
    public withAvailableQueueInfo(availableQueueInfo: Array<AvailableQueueInfo>): ShowDatasourceConnectionResponse {
        this['available_queue_info'] = availableQueueInfo;
        return this;
    }
    public set availableQueueInfo(availableQueueInfo: Array<AvailableQueueInfo>  | undefined) {
        this['available_queue_info'] = availableQueueInfo;
    }
    public get availableQueueInfo(): Array<AvailableQueueInfo> | undefined {
        return this['available_queue_info'];
    }
}