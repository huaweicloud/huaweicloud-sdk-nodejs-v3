import { CreatTransitIpOption } from './CreatTransitIpOption';


export class CreateTransitIpRequestBody {
    private 'transit_ip'?: CreatTransitIpOption;
    public constructor(transitIp?: CreatTransitIpOption) { 
        this['transit_ip'] = transitIp;
    }
    public withTransitIp(transitIp: CreatTransitIpOption): CreateTransitIpRequestBody {
        this['transit_ip'] = transitIp;
        return this;
    }
    public set transitIp(transitIp: CreatTransitIpOption  | undefined) {
        this['transit_ip'] = transitIp;
    }
    public get transitIp(): CreatTransitIpOption | undefined {
        return this['transit_ip'];
    }
}