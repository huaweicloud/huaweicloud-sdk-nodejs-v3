

export class DeleteEnterpriseRouterRequest {
    private 'er_id': string | undefined;
    public constructor(erId?: any) { 
        this['er_id'] = erId;
    }
    public withErId(erId: string): DeleteEnterpriseRouterRequest {
        this['er_id'] = erId;
        return this;
    }
    public set erId(erId: string | undefined) {
        this['er_id'] = erId;
    }
    public get erId() {
        return this['er_id'];
    }
}