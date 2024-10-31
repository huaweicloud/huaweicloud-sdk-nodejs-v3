import { NacosServerConfig } from './NacosServerConfig';
import { NacosUserInfo } from './NacosUserInfo';


export class MicroServiceInfoNacosBase {
    public namespace?: string;
    private 'cluster_name'?: string;
    private 'group_name'?: string;
    private 'service_name'?: string;
    private 'server_config'?: Array<NacosServerConfig>;
    private 'user_info'?: NacosUserInfo;
    public constructor(serviceName?: string, serverConfig?: Array<NacosServerConfig>, userInfo?: NacosUserInfo) { 
        this['service_name'] = serviceName;
        this['server_config'] = serverConfig;
        this['user_info'] = userInfo;
    }
    public withNamespace(namespace: string): MicroServiceInfoNacosBase {
        this['namespace'] = namespace;
        return this;
    }
    public withClusterName(clusterName: string): MicroServiceInfoNacosBase {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withGroupName(groupName: string): MicroServiceInfoNacosBase {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withServiceName(serviceName: string): MicroServiceInfoNacosBase {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withServerConfig(serverConfig: Array<NacosServerConfig>): MicroServiceInfoNacosBase {
        this['server_config'] = serverConfig;
        return this;
    }
    public set serverConfig(serverConfig: Array<NacosServerConfig>  | undefined) {
        this['server_config'] = serverConfig;
    }
    public get serverConfig(): Array<NacosServerConfig> | undefined {
        return this['server_config'];
    }
    public withUserInfo(userInfo: NacosUserInfo): MicroServiceInfoNacosBase {
        this['user_info'] = userInfo;
        return this;
    }
    public set userInfo(userInfo: NacosUserInfo  | undefined) {
        this['user_info'] = userInfo;
    }
    public get userInfo(): NacosUserInfo | undefined {
        return this['user_info'];
    }
}