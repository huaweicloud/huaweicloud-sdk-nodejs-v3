import { UpdateEnterpriseRouterRequestBody } from './UpdateEnterpriseRouterRequestBody';


export class UpdateEnterpriseRouterRequest {
    private 'er_id'?: string;
    public body?: UpdateEnterpriseRouterRequestBody;
    public constructor(erId?: string) { 
        this['er_id'] = erId;
    }
    public withErId(erId: string): UpdateEnterpriseRouterRequest {
        this['er_id'] = erId;
        return this;
    }
    public set erId(erId: string  | undefined) {
        this['er_id'] = erId;
    }
    public get erId(): string | undefined {
        return this['er_id'];
    }
    public withBody(body: UpdateEnterpriseRouterRequestBody): UpdateEnterpriseRouterRequest {
        this['body'] = body;
        return this;
    }
}