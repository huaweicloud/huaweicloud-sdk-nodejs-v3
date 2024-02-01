import { InstanceInfo } from './InstanceInfo';
import { ProxyInfo } from './ProxyInfo';


export class QueryProxyResponseV3 {
    public proxy?: ProxyInfo;
    private 'master_instance'?: InstanceInfo;
    private 'readonly_instances'?: Array<InstanceInfo>;
    private 'proxy_security_group_check_result'?: boolean;
    public constructor() { 
    }
    public withProxy(proxy: ProxyInfo): QueryProxyResponseV3 {
        this['proxy'] = proxy;
        return this;
    }
    public withMasterInstance(masterInstance: InstanceInfo): QueryProxyResponseV3 {
        this['master_instance'] = masterInstance;
        return this;
    }
    public set masterInstance(masterInstance: InstanceInfo  | undefined) {
        this['master_instance'] = masterInstance;
    }
    public get masterInstance(): InstanceInfo | undefined {
        return this['master_instance'];
    }
    public withReadonlyInstances(readonlyInstances: Array<InstanceInfo>): QueryProxyResponseV3 {
        this['readonly_instances'] = readonlyInstances;
        return this;
    }
    public set readonlyInstances(readonlyInstances: Array<InstanceInfo>  | undefined) {
        this['readonly_instances'] = readonlyInstances;
    }
    public get readonlyInstances(): Array<InstanceInfo> | undefined {
        return this['readonly_instances'];
    }
    public withProxySecurityGroupCheckResult(proxySecurityGroupCheckResult: boolean): QueryProxyResponseV3 {
        this['proxy_security_group_check_result'] = proxySecurityGroupCheckResult;
        return this;
    }
    public set proxySecurityGroupCheckResult(proxySecurityGroupCheckResult: boolean  | undefined) {
        this['proxy_security_group_check_result'] = proxySecurityGroupCheckResult;
    }
    public get proxySecurityGroupCheckResult(): boolean | undefined {
        return this['proxy_security_group_check_result'];
    }
}