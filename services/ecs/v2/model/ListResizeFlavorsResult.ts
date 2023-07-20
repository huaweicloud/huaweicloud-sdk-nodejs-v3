import { FlavorExtraSpec } from './FlavorExtraSpec';
import { FlavorLink } from './FlavorLink';


export class ListResizeFlavorsResult {
    public id?: string;
    public name?: string;
    public vcpus?: string;
    public ram?: number;
    public disk?: string;
    public swap?: string;
    private 'OS-FLV-EXT-DATA:ephemeral'?: number;
    private 'OS-FLV-DISABLED:disabled'?: boolean;
    private 'rxtx_factor'?: number;
    private 'rxtx_quota'?: string;
    private 'rxtx_cap'?: string;
    private 'os-flavor-access:is_public'?: boolean;
    public links?: Array<FlavorLink>;
    private 'extra_specs'?: FlavorExtraSpec;
    private 'instance_quota'?: object;
    public constructor(id?: string, name?: string, vcpus?: string, ram?: number, disk?: string, swap?: string, oSFLVEXTDATAEphemeral?: number, oSFLVDISABLEDDisabled?: boolean, rxtxFactor?: number, rxtxQuota?: string, rxtxCap?: string, osFlavorAccessIsPublic?: boolean, links?: Array<FlavorLink>, extraSpecs?: FlavorExtraSpec, instanceQuota?: object) { 
        this['id'] = id;
        this['name'] = name;
        this['vcpus'] = vcpus;
        this['ram'] = ram;
        this['disk'] = disk;
        this['swap'] = swap;
        this['OS-FLV-EXT-DATA:ephemeral'] = oSFLVEXTDATAEphemeral;
        this['OS-FLV-DISABLED:disabled'] = oSFLVDISABLEDDisabled;
        this['rxtx_factor'] = rxtxFactor;
        this['rxtx_quota'] = rxtxQuota;
        this['rxtx_cap'] = rxtxCap;
        this['os-flavor-access:is_public'] = osFlavorAccessIsPublic;
        this['links'] = links;
        this['extra_specs'] = extraSpecs;
        this['instance_quota'] = instanceQuota;
    }
    public withId(id: string): ListResizeFlavorsResult {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListResizeFlavorsResult {
        this['name'] = name;
        return this;
    }
    public withVcpus(vcpus: string): ListResizeFlavorsResult {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: number): ListResizeFlavorsResult {
        this['ram'] = ram;
        return this;
    }
    public withDisk(disk: string): ListResizeFlavorsResult {
        this['disk'] = disk;
        return this;
    }
    public withSwap(swap: string): ListResizeFlavorsResult {
        this['swap'] = swap;
        return this;
    }
    public withOSFLVEXTDATAEphemeral(oSFLVEXTDATAEphemeral: number): ListResizeFlavorsResult {
        this['OS-FLV-EXT-DATA:ephemeral'] = oSFLVEXTDATAEphemeral;
        return this;
    }
    public set oSFLVEXTDATAEphemeral(oSFLVEXTDATAEphemeral: number  | undefined) {
        this['OS-FLV-EXT-DATA:ephemeral'] = oSFLVEXTDATAEphemeral;
    }
    public get oSFLVEXTDATAEphemeral(): number | undefined {
        return this['OS-FLV-EXT-DATA:ephemeral'];
    }
    public withOSFLVDISABLEDDisabled(oSFLVDISABLEDDisabled: boolean): ListResizeFlavorsResult {
        this['OS-FLV-DISABLED:disabled'] = oSFLVDISABLEDDisabled;
        return this;
    }
    public set oSFLVDISABLEDDisabled(oSFLVDISABLEDDisabled: boolean  | undefined) {
        this['OS-FLV-DISABLED:disabled'] = oSFLVDISABLEDDisabled;
    }
    public get oSFLVDISABLEDDisabled(): boolean | undefined {
        return this['OS-FLV-DISABLED:disabled'];
    }
    public withRxtxFactor(rxtxFactor: number): ListResizeFlavorsResult {
        this['rxtx_factor'] = rxtxFactor;
        return this;
    }
    public set rxtxFactor(rxtxFactor: number  | undefined) {
        this['rxtx_factor'] = rxtxFactor;
    }
    public get rxtxFactor(): number | undefined {
        return this['rxtx_factor'];
    }
    public withRxtxQuota(rxtxQuota: string): ListResizeFlavorsResult {
        this['rxtx_quota'] = rxtxQuota;
        return this;
    }
    public set rxtxQuota(rxtxQuota: string  | undefined) {
        this['rxtx_quota'] = rxtxQuota;
    }
    public get rxtxQuota(): string | undefined {
        return this['rxtx_quota'];
    }
    public withRxtxCap(rxtxCap: string): ListResizeFlavorsResult {
        this['rxtx_cap'] = rxtxCap;
        return this;
    }
    public set rxtxCap(rxtxCap: string  | undefined) {
        this['rxtx_cap'] = rxtxCap;
    }
    public get rxtxCap(): string | undefined {
        return this['rxtx_cap'];
    }
    public withOsFlavorAccessIsPublic(osFlavorAccessIsPublic: boolean): ListResizeFlavorsResult {
        this['os-flavor-access:is_public'] = osFlavorAccessIsPublic;
        return this;
    }
    public set osFlavorAccessIsPublic(osFlavorAccessIsPublic: boolean  | undefined) {
        this['os-flavor-access:is_public'] = osFlavorAccessIsPublic;
    }
    public get osFlavorAccessIsPublic(): boolean | undefined {
        return this['os-flavor-access:is_public'];
    }
    public withLinks(links: Array<FlavorLink>): ListResizeFlavorsResult {
        this['links'] = links;
        return this;
    }
    public withExtraSpecs(extraSpecs: FlavorExtraSpec): ListResizeFlavorsResult {
        this['extra_specs'] = extraSpecs;
        return this;
    }
    public set extraSpecs(extraSpecs: FlavorExtraSpec  | undefined) {
        this['extra_specs'] = extraSpecs;
    }
    public get extraSpecs(): FlavorExtraSpec | undefined {
        return this['extra_specs'];
    }
    public withInstanceQuota(instanceQuota: object): ListResizeFlavorsResult {
        this['instance_quota'] = instanceQuota;
        return this;
    }
    public set instanceQuota(instanceQuota: object  | undefined) {
        this['instance_quota'] = instanceQuota;
    }
    public get instanceQuota(): object | undefined {
        return this['instance_quota'];
    }
}