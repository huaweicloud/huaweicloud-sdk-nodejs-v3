import { UpdateEnterpriseRouterRequestBody } from './UpdateEnterpriseRouterRequestBody';


export class UpdateEnterpriseRouterRequest {
    private 'er_id': string | undefined;
    public body?: UpdateEnterpriseRouterRequestBody;
    public constructor(erId?: any) { 
        this['er_id'] = erId;
    }
    public withErId(erId: string): UpdateEnterpriseRouterRequest {
        this['er_id'] = erId;
        return this;
    }
    public set erId(erId: string | undefined) {
        this['er_id'] = erId;
    }
    public get erId() {
        return this['er_id'];
    }
    public withBody(body: UpdateEnterpriseRouterRequestBody): UpdateEnterpriseRouterRequest {
        this['body'] = body;
        return this;
    }
}