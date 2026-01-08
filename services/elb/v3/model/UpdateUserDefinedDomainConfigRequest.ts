import { UpdateUserDefinedDomainConfigRequestBody } from './UpdateUserDefinedDomainConfigRequestBody';


export class UpdateUserDefinedDomainConfigRequest {
    private 'loadbalancer_id'?: string;
    public body?: UpdateUserDefinedDomainConfigRequestBody;
    public constructor(loadbalancerId?: string) { 
        this['loadbalancer_id'] = loadbalancerId;
    }
    public withLoadbalancerId(loadbalancerId: string): UpdateUserDefinedDomainConfigRequest {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): string | undefined {
        return this['loadbalancer_id'];
    }
    public withBody(body: UpdateUserDefinedDomainConfigRequestBody): UpdateUserDefinedDomainConfigRequest {
        this['body'] = body;
        return this;
    }
}