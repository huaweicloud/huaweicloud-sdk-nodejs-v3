import { FlavorExtraSpec } from './FlavorExtraSpec';
import { FlavorLink } from './FlavorLink';
import { ServerAttachableQuantity } from './ServerAttachableQuantity';


export class Flavor {
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
    private 'os_extra_specs'?: FlavorExtraSpec;
    public attachableQuantity?: ServerAttachableQuantity;
    public constructor(id?: string, name?: string, vcpus?: string, ram?: number, disk?: string, swap?: string, oSFLVEXTDATAEphemeral?: number, oSFLVDISABLEDDisabled?: boolean, rxtxFactor?: number, rxtxQuota?: string, rxtxCap?: string, osFlavorAccessIsPublic?: boolean, links?: Array<FlavorLink>, osExtraSpecs?: FlavorExtraSpec) { 
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
        this['os_extra_specs'] = osExtraSpecs;
    }
    public withId(id: string): Flavor {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Flavor {
        this['name'] = name;
        return this;
    }
    public withVcpus(vcpus: string): Flavor {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: number): Flavor {
        this['ram'] = ram;
        return this;
    }
    public withDisk(disk: string): Flavor {
        this['disk'] = disk;
        return this;
    }
    public withSwap(swap: string): Flavor {
        this['swap'] = swap;
        return this;
    }
    public withOSFLVEXTDATAEphemeral(oSFLVEXTDATAEphemeral: number): Flavor {
        this['OS-FLV-EXT-DATA:ephemeral'] = oSFLVEXTDATAEphemeral;
        return this;
    }
    public set oSFLVEXTDATAEphemeral(oSFLVEXTDATAEphemeral: number  | undefined) {
        this['OS-FLV-EXT-DATA:ephemeral'] = oSFLVEXTDATAEphemeral;
    }
    public get oSFLVEXTDATAEphemeral(): number | undefined {
        return this['OS-FLV-EXT-DATA:ephemeral'];
    }
    public withOSFLVDISABLEDDisabled(oSFLVDISABLEDDisabled: boolean): Flavor {
        this['OS-FLV-DISABLED:disabled'] = oSFLVDISABLEDDisabled;
        return this;
    }
    public set oSFLVDISABLEDDisabled(oSFLVDISABLEDDisabled: boolean  | undefined) {
        this['OS-FLV-DISABLED:disabled'] = oSFLVDISABLEDDisabled;
    }
    public get oSFLVDISABLEDDisabled(): boolean | undefined {
        return this['OS-FLV-DISABLED:disabled'];
    }
    public withRxtxFactor(rxtxFactor: number): Flavor {
        this['rxtx_factor'] = rxtxFactor;
        return this;
    }
    public set rxtxFactor(rxtxFactor: number  | undefined) {
        this['rxtx_factor'] = rxtxFactor;
    }
    public get rxtxFactor(): number | undefined {
        return this['rxtx_factor'];
    }
    public withRxtxQuota(rxtxQuota: string): Flavor {
        this['rxtx_quota'] = rxtxQuota;
        return this;
    }
    public set rxtxQuota(rxtxQuota: string  | undefined) {
        this['rxtx_quota'] = rxtxQuota;
    }
    public get rxtxQuota(): string | undefined {
        return this['rxtx_quota'];
    }
    public withRxtxCap(rxtxCap: string): Flavor {
        this['rxtx_cap'] = rxtxCap;
        return this;
    }
    public set rxtxCap(rxtxCap: string  | undefined) {
        this['rxtx_cap'] = rxtxCap;
    }
    public get rxtxCap(): string | undefined {
        return this['rxtx_cap'];
    }
    public withOsFlavorAccessIsPublic(osFlavorAccessIsPublic: boolean): Flavor {
        this['os-flavor-access:is_public'] = osFlavorAccessIsPublic;
        return this;
    }
    public set osFlavorAccessIsPublic(osFlavorAccessIsPublic: boolean  | undefined) {
        this['os-flavor-access:is_public'] = osFlavorAccessIsPublic;
    }
    public get osFlavorAccessIsPublic(): boolean | undefined {
        return this['os-flavor-access:is_public'];
    }
    public withLinks(links: Array<FlavorLink>): Flavor {
        this['links'] = links;
        return this;
    }
    public withOsExtraSpecs(osExtraSpecs: FlavorExtraSpec): Flavor {
        this['os_extra_specs'] = osExtraSpecs;
        return this;
    }
    public set osExtraSpecs(osExtraSpecs: FlavorExtraSpec  | undefined) {
        this['os_extra_specs'] = osExtraSpecs;
    }
    public get osExtraSpecs(): FlavorExtraSpec | undefined {
        return this['os_extra_specs'];
    }
    public withAttachableQuantity(attachableQuantity: ServerAttachableQuantity): Flavor {
        this['attachableQuantity'] = attachableQuantity;
        return this;
    }
}