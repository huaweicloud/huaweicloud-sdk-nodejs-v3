import { BalancerActiveWindow } from './BalancerActiveWindow';


export class SetBalancerWindowRequest {
    private 'instance_id'?: string;
    public body?: BalancerActiveWindow;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): SetBalancerWindowRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withBody(body: BalancerActiveWindow): SetBalancerWindowRequest {
        this['body'] = body;
        return this;
    }
}