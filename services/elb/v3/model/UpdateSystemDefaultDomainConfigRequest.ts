import { UpdateSystemDefaultDomainConfigRequestBody } from './UpdateSystemDefaultDomainConfigRequestBody';


export class UpdateSystemDefaultDomainConfigRequest {
    private 'loadbalancer_id'?: string;
    public body?: UpdateSystemDefaultDomainConfigRequestBody;
    public constructor(loadbalancerId?: string) { 
        this['loadbalancer_id'] = loadbalancerId;
    }
    public withLoadbalancerId(loadbalancerId: string): UpdateSystemDefaultDomainConfigRequest {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): string | undefined {
        return this['loadbalancer_id'];
    }
    public withBody(body: UpdateSystemDefaultDomainConfigRequestBody): UpdateSystemDefaultDomainConfigRequest {
        this['body'] = body;
        return this;
    }
}