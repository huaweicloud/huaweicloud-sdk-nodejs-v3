import { HwcDomain } from './HwcDomain';
import { HwcEcs } from './HwcEcs';
import { HwcEip } from './HwcEip';
import { HwcRds } from './HwcRds';
import { HwcSubnet } from './HwcSubnet';
import { HwcVpc } from './HwcVpc';
import { OcaIp } from './OcaIp';
import { Website } from './Website';


export class Properties {
    private 'hwc_ecs'?: HwcEcs;
    private 'hwc_eip'?: HwcEip;
    private 'hwc_vpc'?: HwcVpc;
    private 'hwc_subnet'?: HwcSubnet;
    private 'hwc_rds'?: HwcRds;
    private 'hwc_domain'?: HwcDomain;
    public website?: Website;
    private 'oca_ip'?: OcaIp;
    public constructor() { 
    }
    public withHwcEcs(hwcEcs: HwcEcs): Properties {
        this['hwc_ecs'] = hwcEcs;
        return this;
    }
    public set hwcEcs(hwcEcs: HwcEcs  | undefined) {
        this['hwc_ecs'] = hwcEcs;
    }
    public get hwcEcs(): HwcEcs | undefined {
        return this['hwc_ecs'];
    }
    public withHwcEip(hwcEip: HwcEip): Properties {
        this['hwc_eip'] = hwcEip;
        return this;
    }
    public set hwcEip(hwcEip: HwcEip  | undefined) {
        this['hwc_eip'] = hwcEip;
    }
    public get hwcEip(): HwcEip | undefined {
        return this['hwc_eip'];
    }
    public withHwcVpc(hwcVpc: HwcVpc): Properties {
        this['hwc_vpc'] = hwcVpc;
        return this;
    }
    public set hwcVpc(hwcVpc: HwcVpc  | undefined) {
        this['hwc_vpc'] = hwcVpc;
    }
    public get hwcVpc(): HwcVpc | undefined {
        return this['hwc_vpc'];
    }
    public withHwcSubnet(hwcSubnet: HwcSubnet): Properties {
        this['hwc_subnet'] = hwcSubnet;
        return this;
    }
    public set hwcSubnet(hwcSubnet: HwcSubnet  | undefined) {
        this['hwc_subnet'] = hwcSubnet;
    }
    public get hwcSubnet(): HwcSubnet | undefined {
        return this['hwc_subnet'];
    }
    public withHwcRds(hwcRds: HwcRds): Properties {
        this['hwc_rds'] = hwcRds;
        return this;
    }
    public set hwcRds(hwcRds: HwcRds  | undefined) {
        this['hwc_rds'] = hwcRds;
    }
    public get hwcRds(): HwcRds | undefined {
        return this['hwc_rds'];
    }
    public withHwcDomain(hwcDomain: HwcDomain): Properties {
        this['hwc_domain'] = hwcDomain;
        return this;
    }
    public set hwcDomain(hwcDomain: HwcDomain  | undefined) {
        this['hwc_domain'] = hwcDomain;
    }
    public get hwcDomain(): HwcDomain | undefined {
        return this['hwc_domain'];
    }
    public withWebsite(website: Website): Properties {
        this['website'] = website;
        return this;
    }
    public withOcaIp(ocaIp: OcaIp): Properties {
        this['oca_ip'] = ocaIp;
        return this;
    }
    public set ocaIp(ocaIp: OcaIp  | undefined) {
        this['oca_ip'] = ocaIp;
    }
    public get ocaIp(): OcaIp | undefined {
        return this['oca_ip'];
    }
}