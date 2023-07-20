import { PublicipInfoResp } from './PublicipInfoResp';


export class BandWidthRules {
    public id?: string;
    public name?: string;
    private 'admin_state_up'?: boolean;
    private 'egress_size'?: number;
    private 'egress_guarented_size'?: number;
    private 'publicip_info'?: Array<PublicipInfoResp>;
    public constructor() { 
    }
    public withId(id: string): BandWidthRules {
        this['id'] = id;
        return this;
    }
    public withName(name: string): BandWidthRules {
        this['name'] = name;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): BandWidthRules {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withEgressSize(egressSize: number): BandWidthRules {
        this['egress_size'] = egressSize;
        return this;
    }
    public set egressSize(egressSize: number  | undefined) {
        this['egress_size'] = egressSize;
    }
    public get egressSize(): number | undefined {
        return this['egress_size'];
    }
    public withEgressGuarentedSize(egressGuarentedSize: number): BandWidthRules {
        this['egress_guarented_size'] = egressGuarentedSize;
        return this;
    }
    public set egressGuarentedSize(egressGuarentedSize: number  | undefined) {
        this['egress_guarented_size'] = egressGuarentedSize;
    }
    public get egressGuarentedSize(): number | undefined {
        return this['egress_guarented_size'];
    }
    public withPublicipInfo(publicipInfo: Array<PublicipInfoResp>): BandWidthRules {
        this['publicip_info'] = publicipInfo;
        return this;
    }
    public set publicipInfo(publicipInfo: Array<PublicipInfoResp>  | undefined) {
        this['publicip_info'] = publicipInfo;
    }
    public get publicipInfo(): Array<PublicipInfoResp> | undefined {
        return this['publicip_info'];
    }
}