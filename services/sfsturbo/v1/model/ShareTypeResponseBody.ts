import { ShareTypeAvailableZone } from './ShareTypeAvailableZone';
import { ShareTypeUsage } from './ShareTypeUsage';
import { ShareTypesAttribution } from './ShareTypesAttribution';


export class ShareTypeResponseBody {
    private 'share_type'?: string;
    public scenario?: string;
    public attribution?: ShareTypesAttribution;
    private 'spec_id'?: string;
    private 'share_type_usage'?: ShareTypeUsage;
    private 'support_period'?: boolean;
    private 'available_zones'?: Array<ShareTypeAvailableZone>;
    private 'spec_code'?: string;
    private 'storage_media'?: ShareTypeResponseBodyStorageMediaEnum | string;
    public features?: Array<string>;
    public constructor() { 
    }
    public withShareType(shareType: string): ShareTypeResponseBody {
        this['share_type'] = shareType;
        return this;
    }
    public set shareType(shareType: string  | undefined) {
        this['share_type'] = shareType;
    }
    public get shareType(): string | undefined {
        return this['share_type'];
    }
    public withScenario(scenario: string): ShareTypeResponseBody {
        this['scenario'] = scenario;
        return this;
    }
    public withAttribution(attribution: ShareTypesAttribution): ShareTypeResponseBody {
        this['attribution'] = attribution;
        return this;
    }
    public withSpecId(specId: string): ShareTypeResponseBody {
        this['spec_id'] = specId;
        return this;
    }
    public set specId(specId: string  | undefined) {
        this['spec_id'] = specId;
    }
    public get specId(): string | undefined {
        return this['spec_id'];
    }
    public withShareTypeUsage(shareTypeUsage: ShareTypeUsage): ShareTypeResponseBody {
        this['share_type_usage'] = shareTypeUsage;
        return this;
    }
    public set shareTypeUsage(shareTypeUsage: ShareTypeUsage  | undefined) {
        this['share_type_usage'] = shareTypeUsage;
    }
    public get shareTypeUsage(): ShareTypeUsage | undefined {
        return this['share_type_usage'];
    }
    public withSupportPeriod(supportPeriod: boolean): ShareTypeResponseBody {
        this['support_period'] = supportPeriod;
        return this;
    }
    public set supportPeriod(supportPeriod: boolean  | undefined) {
        this['support_period'] = supportPeriod;
    }
    public get supportPeriod(): boolean | undefined {
        return this['support_period'];
    }
    public withAvailableZones(availableZones: Array<ShareTypeAvailableZone>): ShareTypeResponseBody {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<ShareTypeAvailableZone>  | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones(): Array<ShareTypeAvailableZone> | undefined {
        return this['available_zones'];
    }
    public withSpecCode(specCode: string): ShareTypeResponseBody {
        this['spec_code'] = specCode;
        return this;
    }
    public set specCode(specCode: string  | undefined) {
        this['spec_code'] = specCode;
    }
    public get specCode(): string | undefined {
        return this['spec_code'];
    }
    public withStorageMedia(storageMedia: ShareTypeResponseBodyStorageMediaEnum | string): ShareTypeResponseBody {
        this['storage_media'] = storageMedia;
        return this;
    }
    public set storageMedia(storageMedia: ShareTypeResponseBodyStorageMediaEnum | string  | undefined) {
        this['storage_media'] = storageMedia;
    }
    public get storageMedia(): ShareTypeResponseBodyStorageMediaEnum | string | undefined {
        return this['storage_media'];
    }
    public withFeatures(features: Array<string>): ShareTypeResponseBody {
        this['features'] = features;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShareTypeResponseBodyStorageMediaEnum {
    HDD = 'HDD',
    SSD = 'SSD',
    ESSD = 'ESSD'
}
