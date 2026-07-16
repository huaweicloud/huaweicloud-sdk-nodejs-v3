import { ServerTaskLimit } from './ServerTaskLimit';
import { ServiceInvokeResponse } from './ServiceInvokeResponse';
import { ServiceLimitResponse } from './ServiceLimitResponse';
import { ServiceSecretResponse } from './ServiceSecretResponse';


export class RuntimeConfigResponse {
    private 'service_invoke'?: ServiceInvokeResponse;
    private 'service_limit'?: ServiceLimitResponse;
    private 'service_secret'?: ServiceSecretResponse;
    private 'server_task_limit'?: ServerTaskLimit;
    public constructor(serviceInvoke?: ServiceInvokeResponse, serviceLimit?: ServiceLimitResponse) { 
        this['service_invoke'] = serviceInvoke;
        this['service_limit'] = serviceLimit;
    }
    public withServiceInvoke(serviceInvoke: ServiceInvokeResponse): RuntimeConfigResponse {
        this['service_invoke'] = serviceInvoke;
        return this;
    }
    public set serviceInvoke(serviceInvoke: ServiceInvokeResponse  | undefined) {
        this['service_invoke'] = serviceInvoke;
    }
    public get serviceInvoke(): ServiceInvokeResponse | undefined {
        return this['service_invoke'];
    }
    public withServiceLimit(serviceLimit: ServiceLimitResponse): RuntimeConfigResponse {
        this['service_limit'] = serviceLimit;
        return this;
    }
    public set serviceLimit(serviceLimit: ServiceLimitResponse  | undefined) {
        this['service_limit'] = serviceLimit;
    }
    public get serviceLimit(): ServiceLimitResponse | undefined {
        return this['service_limit'];
    }
    public withServiceSecret(serviceSecret: ServiceSecretResponse): RuntimeConfigResponse {
        this['service_secret'] = serviceSecret;
        return this;
    }
    public set serviceSecret(serviceSecret: ServiceSecretResponse  | undefined) {
        this['service_secret'] = serviceSecret;
    }
    public get serviceSecret(): ServiceSecretResponse | undefined {
        return this['service_secret'];
    }
    public withServerTaskLimit(serverTaskLimit: ServerTaskLimit): RuntimeConfigResponse {
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