

export class ShowEnterpriseRouterRequest {
    private 'er_id': string | undefined;
    public constructor(erId?: any) { 
        this['er_id'] = erId;
    }
    public withErId(erId: string): ShowEnterpriseRouterRequest {
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