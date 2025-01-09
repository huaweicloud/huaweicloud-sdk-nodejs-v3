import { UpdateNatMappingConfig } from './UpdateNatMappingConfig';


export class UpdateNatMappingConfigsReq {
    private 'site_id'?: string;
    private 'nat_on'?: boolean;
    private 'nat_vag_maps'?: Array<UpdateNatMappingConfig>;
    public constructor() { 
    }
    public withSiteId(siteId: string): UpdateNatMappingConfigsReq {
        this['site_id'] = siteId;
        return this;
    }
    public set siteId(siteId: string  | undefined) {
        this['site_id'] = siteId;
    }
    public get siteId(): string | undefined {
        return this['site_id'];
    }
    public withNatOn(natOn: boolean): UpdateNatMappingConfigsReq {
        this['nat_on'] = natOn;
        return this;
    }
    public set natOn(natOn: boolean  | undefined) {
        this['nat_on'] = natOn;
    }
    public get natOn(): boolean | undefined {
        return this['nat_on'];
    }
    public withNatVagMaps(natVagMaps: Array<UpdateNatMappingConfig>): UpdateNatMappingConfigsReq {
        this['nat_vag_maps'] = natVagMaps;
        return this;
    }
    public set natVagMaps(natVagMaps: Array<UpdateNatMappingConfig>  | undefined) {
        this['nat_vag_maps'] = natVagMaps;
    }
    public get natVagMaps(): Array<UpdateNatMappingConfig> | undefined {
        return this['nat_vag_maps'];
    }
}