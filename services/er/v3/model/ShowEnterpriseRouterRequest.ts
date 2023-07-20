

export class ShowEnterpriseRouterRequest {
    private 'er_id'?: string;
    public constructor(erId?: string) { 
        this['er_id'] = erId;
    }
    public withErId(erId: string): ShowEnterpriseRouterRequest {
        this['er_id'] = erId;
        return this;
    }
    public set erId(erId: string  | undefined) {
        this['er_id'] = erId;
    }
    public get erId(): string | undefined {
        return this['er_id'];
    }
}