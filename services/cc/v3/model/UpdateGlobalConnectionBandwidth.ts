import { Description } from './Description';
import { GcbBindingServiceAll } from './GcbBindingServiceAll';
import { GcbChargeMode } from './GcbChargeMode';
import { GcbSize } from './GcbSize';
import { GcbSlaLevel } from './GcbSlaLevel';
import { GcbSpecCodeId } from './GcbSpecCodeId';
import { NonRequiredName } from './NonRequiredName';


export class UpdateGlobalConnectionBandwidth {
    public name?: string;
    public description?: string;
    public size?: number;
    private 'charge_mode'?: UpdateGlobalConnectionBandwidthChargeModeEnum | string;
    private 'sla_level'?: UpdateGlobalConnectionBandwidthSlaLevelEnum | string;
    private 'binding_service'?: UpdateGlobalConnectionBandwidthBindingServiceEnum | string;
    private 'spec_code_id'?: string;
    public constructor() { 
    }
    public withName(name: string): UpdateGlobalConnectionBandwidth {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateGlobalConnectionBandwidth {
        this['description'] = description;
        return this;
    }
    public withSize(size: number): UpdateGlobalConnectionBandwidth {
        this['size'] = size;
        return this;
    }
    public withChargeMode(chargeMode: UpdateGlobalConnectionBandwidthChargeModeEnum | string): UpdateGlobalConnectionBandwidth {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: UpdateGlobalConnectionBandwidthChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): UpdateGlobalConnectionBandwidthChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
    public withSlaLevel(slaLevel: UpdateGlobalConnectionBandwidthSlaLevelEnum | string): UpdateGlobalConnectionBandwidth {
        this['sla_level'] = slaLevel;
        return this;
    }
    public set slaLevel(slaLevel: UpdateGlobalConnectionBandwidthSlaLevelEnum | string  | undefined) {
        this['sla_level'] = slaLevel;
    }
    public get slaLevel(): UpdateGlobalConnectionBandwidthSlaLevelEnum | string | undefined {
        return this['sla_level'];
    }
    public withBindingService(bindingService: UpdateGlobalConnectionBandwidthBindingServiceEnum | string): UpdateGlobalConnectionBandwidth {
        this['binding_service'] = bindingService;
        return this;
    }
    public set bindingService(bindingService: UpdateGlobalConnectionBandwidthBindingServiceEnum | string  | undefined) {
        this['binding_service'] = bindingService;
    }
    public get bindingService(): UpdateGlobalConnectionBandwidthBindingServiceEnum | string | undefined {
        return this['binding_service'];
    }
    public withSpecCodeId(specCodeId: string): UpdateGlobalConnectionBandwidth {
        this['spec_code_id'] = specCodeId;
        return this;
    }
    public set specCodeId(specCodeId: string  | undefined) {
        this['spec_code_id'] = specCodeId;
    }
    public get specCodeId(): string | undefined {
        return this['spec_code_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateGlobalConnectionBandwidthChargeModeEnum {
    BWD = 'bwd',
    E_95 = '95'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateGlobalConnectionBandwidthSlaLevelEnum {
    PT = 'Pt',
    AU = 'Au',
    AG = 'Ag'
}
/**
    * @export
    * @enum {string}
    */
export enum UpdateGlobalConnectionBandwidthBindingServiceEnum {
    CC = 'CC',
    GEIP = 'GEIP',
    GCN = 'GCN',
    GSN = 'GSN',
    ALL = 'ALL'
}
