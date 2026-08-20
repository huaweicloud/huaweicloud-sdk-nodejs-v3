import { ServerTaskLimit } from './ServerTaskLimit';
import { ServiceInvokeUpdateRequest } from './ServiceInvokeUpdateRequest';
import { ServiceLimit } from './ServiceLimit';
import { ServiceSecret } from './ServiceSecret';


export class RuntimeConfigUpdateRequest {
    private 'service_invoke'?: ServiceInvokeUpdateRequest;
    private 'service_limit'?: ServiceLimit;
    private 'service_secret'?: ServiceSecret;
    private 'server_task_limit'?: ServerTaskLimit;
    public constructor(serviceInvoke?: ServiceInvokeUpdateRequest, serviceLimit?: ServiceLimit) { 
        this['service_invoke'] = serviceInvoke;
        this['service_limit'] = serviceLimit;
    }
    public withServiceInvoke(serviceInvoke: ServiceInvokeUpdateRequest): RuntimeConfigUpdateRequest {
        this['service_invoke'] = serviceInvoke;
        return this;
    }
    public set serviceInvoke(serviceInvoke: ServiceInvokeUpdateRequest  | undefined) {
        this['service_invoke'] = serviceInvoke;
    }
    public get serviceInvoke(): ServiceInvokeUpdateRequest | undefined {
        return this['service_invoke'];
    }
    public withServiceLimit(serviceLimit: ServiceLimit): RuntimeConfigUpdateRequest {
        this['service_limit'] = serviceLimit;
        return this;
    }
    public set serviceLimit(serviceLimit: ServiceLimit  | undefined) {
        this['service_limit'] = serviceLimit;
    }
    public get serviceLimit(): ServiceLimit | undefined {
        return this['service_limit'];
    }
    public withServiceSecret(serviceSecret: ServiceSecret): RuntimeConfigUpdateRequest {
        this['service_secret'] = serviceSecret;
        return this;
    }
    public set serviceSecret(serviceSecret: ServiceSecret  | undefined) {
        this['service_secret'] = serviceSecret;
    }
    public get serviceSecret(): ServiceSecret | undefined {
        return this['service_secret'];
    }
    public withServerTaskLimit(serverTaskLimit: ServerTaskLimit): RuntimeConfigUpdateRequest {
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