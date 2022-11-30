import { EnterpriseRouterAZ } from './EnterpriseRouterAZ';


export class ChangeAvailabilityZoneRequest {
    private 'er_id': string | undefined;
    public body?: EnterpriseRouterAZ;
    public constructor(erId?: any) { 
        this['er_id'] = erId;
    }
    public withErId(erId: string): ChangeAvailabilityZoneRequest {
        this['er_id'] = erId;
        return this;
    }
    public set erId(erId: string | undefined) {
        this['er_id'] = erId;
    }
    public get erId() {
        return this['er_id'];
    }
    public withBody(body: EnterpriseRouterAZ): ChangeAvailabilityZoneRequest {
        this['body'] = body;
        return this;
    }
}