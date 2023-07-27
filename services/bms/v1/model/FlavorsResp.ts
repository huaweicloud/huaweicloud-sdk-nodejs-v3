import { LinksInfo } from './LinksInfo';
import { OsExtraSpecs } from './OsExtraSpecs';


export class FlavorsResp {
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
    public links?: Array<LinksInfo>;
    private 'os_extra_specs'?: OsExtraSpecs;
    public constructor(id?: string, name?: string, osExtraSpecs?: OsExtraSpecs) { 
        this['id'] = id;
        this['name'] = name;
        this['os_extra_specs'] = osExtraSpecs;
    }
    public withId(id: string): FlavorsResp {
        this['id'] = id;
        return this;
    }
    public withName(name: string): FlavorsResp {
        this['name'] = name;
        return this;
    }
    public withVcpus(vcpus: string): FlavorsResp {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: number): FlavorsResp {
        this['ram'] = ram;
        return this;
    }
    public withDisk(disk: string): FlavorsResp {
        this['disk'] = disk;
        return this;
    }
    public withSwap(swap: string): FlavorsResp {
        this['swap'] = swap;
        return this;
    }
    public withOSFLVEXTDATAEphemeral(oSFLVEXTDATAEphemeral: number): FlavorsResp {
        this['OS-FLV-EXT-DATA:ephemeral'] = oSFLVEXTDATAEphemeral;
        return this;
    }
    public set oSFLVEXTDATAEphemeral(oSFLVEXTDATAEphemeral: number  | undefined) {
        this['OS-FLV-EXT-DATA:ephemeral'] = oSFLVEXTDATAEphemeral;
    }
    public get oSFLVEXTDATAEphemeral(): number | undefined {
        return this['OS-FLV-EXT-DATA:ephemeral'];
    }
    public withOSFLVDISABLEDDisabled(oSFLVDISABLEDDisabled: boolean): FlavorsResp {
        this['OS-FLV-DISABLED:disabled'] = oSFLVDISABLEDDisabled;
        return this;
    }
    public set oSFLVDISABLEDDisabled(oSFLVDISABLEDDisabled: boolean  | undefined) {
        this['OS-FLV-DISABLED:disabled'] = oSFLVDISABLEDDisabled;
    }
    public get oSFLVDISABLEDDisabled(): boolean | undefined {
        return this['OS-FLV-DISABLED:disabled'];
    }
    public withRxtxFactor(rxtxFactor: number): FlavorsResp {
        this['rxtx_factor'] = rxtxFactor;
        return this;
    }
    public set rxtxFactor(rxtxFactor: number  | undefined) {
        this['rxtx_factor'] = rxtxFactor;
    }
    public get rxtxFactor(): number | undefined {
        return this['rxtx_factor'];
    }
    public withRxtxQuota(rxtxQuota: string): FlavorsResp {
        this['rxtx_quota'] = rxtxQuota;
        return this;
    }
    public set rxtxQuota(rxtxQuota: string  | undefined) {
        this['rxtx_quota'] = rxtxQuota;
    }
    public get rxtxQuota(): string | undefined {
        return this['rxtx_quota'];
    }
    public withRxtxCap(rxtxCap: string): FlavorsResp {
        this['rxtx_cap'] = rxtxCap;
        return this;
    }
    public set rxtxCap(rxtxCap: string  | undefined) {
        this['rxtx_cap'] = rxtxCap;
    }
    public get rxtxCap(): string | undefined {
        return this['rxtx_cap'];
    }
    public withOsFlavorAccessIsPublic(osFlavorAccessIsPublic: boolean): FlavorsResp {
        this['os-flavor-access:is_public'] = osFlavorAccessIsPublic;
        return this;
    }
    public set osFlavorAccessIsPublic(osFlavorAccessIsPublic: boolean  | undefined) {
        this['os-flavor-access:is_public'] = osFlavorAccessIsPublic;
    }
    public get osFlavorAccessIsPublic(): boolean | undefined {
        return this['os-flavor-access:is_public'];
    }
    public withLinks(links: Array<LinksInfo>): FlavorsResp {
        this['links'] = links;
        return this;
    }
    public withOsExtraSpecs(osExtraSpecs: OsExtraSpecs): FlavorsResp {
        this['os_extra_specs'] = osExtraSpecs;
        return this;
    }
    public set osExtraSpecs(osExtraSpecs: OsExtraSpecs  | undefined) {
        this['os_extra_specs'] = osExtraSpecs;
    }
    public get osExtraSpecs(): OsExtraSpecs | undefined {
        return this['os_extra_specs'];
    }
}