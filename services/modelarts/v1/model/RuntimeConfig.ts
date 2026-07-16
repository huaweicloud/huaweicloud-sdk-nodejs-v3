import { ServerTaskLimit } from './ServerTaskLimit';
import { ServiceInvoke } from './ServiceInvoke';
import { ServiceLimit } from './ServiceLimit';
import { ServiceSecret } from './ServiceSecret';


export class RuntimeConfig {
    private 'service_invoke'?: ServiceInvoke;
    private 'service_limit'?: ServiceLimit;
    private 'service_secret'?: ServiceSecret;
    private 'server_task_limit'?: ServerTaskLimit;
    public constructor(serviceInvoke?: ServiceInvoke, serviceLimit?: ServiceLimit) { 
        this['service_invoke'] = serviceInvoke;
        this['service_limit'] = serviceLimit;
    }
    public withServiceInvoke(serviceInvoke: ServiceInvoke): RuntimeConfig {
        this['service_invoke'] = serviceInvoke;
        return this;
    }
    public set serviceInvoke(serviceInvoke: ServiceInvoke  | undefined) {
        this['service_invoke'] = serviceInvoke;
    }
    public get serviceInvoke(): ServiceInvoke | undefined {
        return this['service_invoke'];
    }
    public withServiceLimit(serviceLimit: ServiceLimit): RuntimeConfig {
        this['service_limit'] = serviceLimit;
        return this;
    }
    public set serviceLimit(serviceLimit: ServiceLimit  | undefined) {
        this['service_limit'] = serviceLimit;
    }
    public get serviceLimit(): ServiceLimit | undefined {
        return this['service_limit'];
    }
    public withServiceSecret(serviceSecret: ServiceSecret): RuntimeConfig {
        this['service_secret'] = serviceSecret;
        return this;
    }
    public set serviceSecret(serviceSecret: ServiceSecret  | undefined) {
        this['service_secret'] = serviceSecret;
    }
    public get serviceSecret(): ServiceSecret | undefined {
        return this['service_secret'];
    }
    public withServerTaskLimit(serverTaskLimit: ServerTaskLimit): RuntimeConfig {
        this['server_task_limit'] = serverTaskLimit;
        return this;
    }
    public set serverTaskLimit(serverTaskLimit: ServerTaskLimit  | undefined) {
        this['server_task_limit'] = serverTaskLimit;
    }
    public get serverTaskLimit(): ServerTaskLimit | undefined {
        return this['server_task_limit'];
    }
}