import { VpnGatewayAvailabilityZones } from './VpnGatewayAvailabilityZones';


export class AvailabilityZones {
    public basic?: VpnGatewayAvailabilityZones;
    public professional1?: VpnGatewayAvailabilityZones;
    public professional2?: VpnGatewayAvailabilityZones;
    private 'Professional1-NonFixedIP'?: VpnGatewayAvailabilityZones;
    private 'Professional2-NonFixedIP'?: VpnGatewayAvailabilityZones;
    public gm?: VpnGatewayAvailabilityZones;
    public constructor() { 
    }
    public withBasic(basic: VpnGatewayAvailabilityZones): AvailabilityZones {
        this['basic'] = basic;
        return this;
    }
    public withProfessional1(professional1: VpnGatewayAvailabilityZones): AvailabilityZones {
        this['professional1'] = professional1;
        return this;
    }
    public withProfessional2(professional2: VpnGatewayAvailabilityZones): AvailabilityZones {
        this['professional2'] = professional2;
        return this;
    }
    public withProfessional1NonFixedIP(professional1NonFixedIP: VpnGatewayAvailabilityZones): AvailabilityZones {
        this['Professional1-NonFixedIP'] = professional1NonFixedIP;
        return this;
    }
    public set professional1NonFixedIP(professional1NonFixedIP: VpnGatewayAvailabilityZones  | undefined) {
        this['Professional1-NonFixedIP'] = professional1NonFixedIP;
    }
    public get professional1NonFixedIP(): VpnGatewayAvailabilityZones | undefined {
        return this['Professional1-NonFixedIP'];
    }
    public withProfessional2NonFixedIP(professional2NonFixedIP: VpnGatewayAvailabilityZones): AvailabilityZones {
        this['Professional2-NonFixedIP'] = professional2NonFixedIP;
        return this;
    }
    public set professional2NonFixedIP(professional2NonFixedIP: VpnGatewayAvailabilityZones  | undefined) {
        this['Professional2-NonFixedIP'] = professional2NonFixedIP;
    }
    public get professional2NonFixedIP(): VpnGatewayAvailabilityZones | undefined {
        return this['Professional2-NonFixedIP'];
    }
    public withGm(gm: VpnGatewayAvailabilityZones): AvailabilityZones {
        this['gm'] = gm;
        return this;
    }
}