import { ContainerExtraInfo } from './ContainerExtraInfo';
import { ServicePortInfo } from './ServicePortInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowK8sContainerDetailResponse extends SdkResponse {
    private 'service_name'?: string;
    private 'service_username'?: string;
    private 'service_password'?: string;
    private 'service_port_list'?: Array<ServicePortInfo>;
    private 'enable_simulate'?: string;
    public hosts?: string;
    public extra?: ContainerExtraInfo;
    public constructor() { 
        super();
    }
    public withServiceName(serviceName: string): ShowK8sContainerDetailResponse {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withServiceUsername(serviceUsername: string): ShowK8sContainerDetailResponse {
        this['service_username'] = serviceUsername;
        return this;
    }
    public set serviceUsername(serviceUsername: string  | undefined) {
        this['service_username'] = serviceUsername;
    }
    public get serviceUsername(): string | undefined {
        return this['service_username'];
    }
    public withServicePassword(servicePassword: string): ShowK8sContainerDetailResponse {
        this['service_password'] = servicePassword;
        return this;
    }
    public set servicePassword(servicePassword: string  | undefined) {
        this['service_password'] = servicePassword;
    }
    public get servicePassword(): string | undefined {
        return this['service_password'];
    }
    public withServicePortList(servicePortList: Array<ServicePortInfo>): ShowK8sContainerDetailResponse {
        this['service_port_list'] = servicePortList;
        return this;
    }
    public set servicePortList(servicePortList: Array<ServicePortInfo>  | undefined) {
        this['service_port_list'] = servicePortList;
    }
    public get servicePortList(): Array<ServicePortInfo> | undefined {
        return this['service_port_list'];
    }
    public withEnableSimulate(enableSimulate: string): ShowK8sContainerDetailResponse {
        this['enable_simulate'] = enableSimulate;
        return this;
    }
    public set enableSimulate(enableSimulate: string  | undefined) {
        this['enable_simulate'] = enableSimulate;
    }
    public get enableSimulate(): string | undefined {
        return this['enable_simulate'];
    }
    public withHosts(hosts: string): ShowK8sContainerDetailResponse {
        this['hosts'] = hosts;
        return this;
    }
    public withExtra(extra: ContainerExtraInfo): ShowK8sContainerDetailResponse {
        this['extra'] = extra;
        return this;
    }
}