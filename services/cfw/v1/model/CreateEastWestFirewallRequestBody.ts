

export class CreateEastWestFirewallRequestBody {
    private 'er_id'?: string;
    private 'inspection_cidr'?: string;
    public mode?: string;
    public constructor(inspectionCidr?: string, mode?: string) { 
        this['inspection_cidr'] = inspectionCidr;
        this['mode'] = mode;
    }
    public withErId(erId: string): CreateEastWestFirewallRequestBody {
        this['er_id'] = erId;
        return this;
    }
    public set erId(erId: string  | undefined) {
        this['er_id'] = erId;
    }
    public get erId(): string | undefined {
        return this['er_id'];
    }
    public withInspectionCidr(inspectionCidr: string): CreateEastWestFirewallRequestBody {
        this['inspection_cidr'] = inspectionCidr;
        return this;
    }
    public set inspectionCidr(inspectionCidr: string  | undefined) {
        this['inspection_cidr'] = inspectionCidr;
    }
    public get inspectionCidr(): string | undefined {
        return this['inspection_cidr'];
    }
    public withMode(mode: string): CreateEastWestFirewallRequestBody {
        this['mode'] = mode;
        return this;
    }
}