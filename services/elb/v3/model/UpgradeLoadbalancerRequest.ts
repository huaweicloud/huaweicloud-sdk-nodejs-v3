import { UpgradeV3RequestBody } from './UpgradeV3RequestBody';


export class UpgradeLoadbalancerRequest {
    private 'loadbalancer_id'?: string;
    public body?: UpgradeV3RequestBody;
    public constructor(loadbalancerId?: string) { 
        this['loadbalancer_id'] = loadbalancerId;
    }
    public withLoadbalancerId(loadbalancerId: string): UpgradeLoadbalancerRequest {
        this['loadbalancer_id'] = loadbalancerId;
        return this;
    }
    public set loadbalancerId(loadbalancerId: string  | undefined) {
        this['loadbalancer_id'] = loadbalancerId;
    }
    public get loadbalancerId(): string | undefined {
        return this['loadbalancer_id'];
    }
    public withBody(body: UpgradeV3RequestBody): UpgradeLoadbalancerRequest {
        this['body'] = body;
        return this;
    }
}