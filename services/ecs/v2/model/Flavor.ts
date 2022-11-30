import { FlavorExtraSpec } from './FlavorExtraSpec';
import { FlavorLink } from './FlavorLink';
import { ServerAttachableQuantity } from './ServerAttachableQuantity';


export class Flavor {
    public id: string;
    public name: string;
    public vcpus: string;
    public ram: number;
    public disk: string;
    public swap: string;
    private 'OS-FLV-EXT-DATA:ephemeral': number | undefined;
    private 'OS-FLV-DISABLED:disabled': boolean | undefined;
    private 'rxtx_factor': number | undefined;
    private 'rxtx_quota': string | undefined;
    private 'rxtx_cap': string | undefined;
    private 'os-flavor-access:is_public': boolean | undefined;
    public links: Array<FlavorLink>;
    private 'os_extra_specs': FlavorExtraSpec | undefined;
    public attachableQuantity?: ServerAttachableQuantity;
    public constructor(id?: any, name?: any, vcpus?: any, ram?: any, disk?: any, swap?: any, oSFLVEXTDATAEphemeral?: any, oSFLVDISABLEDDisabled?: any, rxtxFactor?: any, rxtxQuota?: any, rxtxCap?: any, osFlavorAccessIsPublic?: any, links?: any, osExtraSpecs?: any) { 
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
    public set oSFLVEXTDATAEphemeral(oSFLVEXTDATAEphemeral: number | undefined) {
        this['OS-FLV-EXT-DATA:ephemeral'] = oSFLVEXTDATAEphemeral;
    }
    public get oSFLVEXTDATAEphemeral() {
        return this['OS-FLV-EXT-DATA:ephemeral'];
    }
    public withOSFLVDISABLEDDisabled(oSFLVDISABLEDDisabled: boolean): Flavor {
        this['OS-FLV-DISABLED:disabled'] = oSFLVDISABLEDDisabled;
        return this;
    }
    public set oSFLVDISABLEDDisabled(oSFLVDISABLEDDisabled: boolean | undefined) {
        this['OS-FLV-DISABLED:disabled'] = oSFLVDISABLEDDisabled;
    }
    public get oSFLVDISABLEDDisabled() {
        return this['OS-FLV-DISABLED:disabled'];
    }
    public withRxtxFactor(rxtxFactor: number): Flavor {
        this['rxtx_factor'] = rxtxFactor;
        return this;
    }
    public set rxtxFactor(rxtxFactor: number | undefined) {
        this['rxtx_factor'] = rxtxFactor;
    }
    public get rxtxFactor() {
        return this['rxtx_factor'];
    }
    public withRxtxQuota(rxtxQuota: string): Flavor {
        this['rxtx_quota'] = rxtxQuota;
        return this;
    }
    public set rxtxQuota(rxtxQuota: string | undefined) {
        this['rxtx_quota'] = rxtxQuota;
    }
    public get rxtxQuota() {
        return this['rxtx_quota'];
    }
    public withRxtxCap(rxtxCap: string): Flavor {
        this['rxtx_cap'] = rxtxCap;
        return this;
    }
    public set rxtxCap(rxtxCap: string | undefined) {
        this['rxtx_cap'] = rxtxCap;
    }
    public get rxtxCap() {
        return this['rxtx_cap'];
    }
    public withOsFlavorAccessIsPublic(osFlavorAccessIsPublic: boolean): Flavor {
        this['os-flavor-access:is_public'] = osFlavorAccessIsPublic;
        return this;
    }
    public set osFlavorAccessIsPublic(osFlavorAccessIsPublic: boolean | undefined) {
        this['os-flavor-access:is_public'] = osFlavorAccessIsPublic;
    }
    public get osFlavorAccessIsPublic() {
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
    public set osExtraSpecs(osExtraSpecs: FlavorExtraSpec | undefined) {
        this['os_extra_specs'] = osExtraSpecs;
    }
    public get osExtraSpecs() {
        return this['os_extra_specs'];
    }
    public withAttachableQuantity(attachableQuantity: ServerAttachableQuantity): Flavor {
        this['attachableQuantity'] = attachableQuantity;
        return this;
    }
}