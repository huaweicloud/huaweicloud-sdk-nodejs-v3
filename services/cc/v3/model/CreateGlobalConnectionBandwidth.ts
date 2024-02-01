import { Description } from './Description';
import { EnterpriseProjectId } from './EnterpriseProjectId';
import { GcbBorderCross } from './GcbBorderCross';
import { GcbChargeMode } from './GcbChargeMode';
import { GcbLocalArea } from './GcbLocalArea';
import { GcbRemoteArea } from './GcbRemoteArea';
import { GcbSize } from './GcbSize';
import { GcbSlaLevel } from './GcbSlaLevel';
import { GcbSpecCodeId } from './GcbSpecCodeId';
import { GcbType } from './GcbType';
import { NonRequiredName } from './NonRequiredName';
import { Tag } from './Tag';
import { Tags } from './Tags';


export class CreateGlobalConnectionBandwidth {
    public name?: string;
    public description?: string;
    public bordercross?: boolean;
    public type?: CreateGlobalConnectionBandwidthTypeEnum | string;
    private 'enterprise_project_id'?: string;
    public tags?: Array<Tag>;
    private 'charge_mode'?: CreateGlobalConnectionBandwidthChargeModeEnum | string;
    public size?: number;
    private 'sla_level'?: CreateGlobalConnectionBandwidthSlaLevelEnum | string;
    private 'local_area'?: string;
    private 'remote_area'?: string;
    private 'spec_code_id'?: string;
    public constructor() { 
    }
    public withName(name: string): CreateGlobalConnectionBandwidth {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateGlobalConnectionBandwidth {
        this['description'] = description;
        return this;
    }
    public withBordercross(bordercross: boolean): CreateGlobalConnectionBandwidth {
        this['bordercross'] = bordercross;
        return this;
    }
    public withType(type: CreateGlobalConnectionBandwidthTypeEnum | string): CreateGlobalConnectionBandwidth {
        this['type'] = type;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateGlobalConnectionBandwidth {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<Tag>): CreateGlobalConnectionBandwidth {
        this['tags'] = tags;
        return this;
    }
    public withChargeMode(chargeMode: CreateGlobalConnectionBandwidthChargeModeEnum | string): CreateGlobalConnectionBandwidth {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: CreateGlobalConnectionBandwidthChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): CreateGlobalConnectionBandwidthChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
    public withSize(size: number): CreateGlobalConnectionBandwidth {
        this['size'] = size;
        return this;
    }
    public withSlaLevel(slaLevel: CreateGlobalConnectionBandwidthSlaLevelEnum | string): CreateGlobalConnectionBandwidth {
        this['sla_level'] = slaLevel;
        return this;
    }
    public set slaLevel(slaLevel: CreateGlobalConnectionBandwidthSlaLevelEnum | string  | undefined) {
        this['sla_level'] = slaLevel;
    }
    public get slaLevel(): CreateGlobalConnectionBandwidthSlaLevelEnum | string | undefined {
        return this['sla_level'];
    }
    public withLocalArea(localArea: string): CreateGlobalConnectionBandwidth {
        this['local_area'] = localArea;
        return this;
    }
    public set localArea(localArea: string  | undefined) {
        this['local_area'] = localArea;
    }
    public get localArea(): string | undefined {
        return this['local_area'];
    }
    public withRemoteArea(remoteArea: string): CreateGlobalConnectionBandwidth {
        this['remote_area'] = remoteArea;
        return this;
    }
    public set remoteArea(remoteArea: string  | undefined) {
        this['remote_area'] = remoteArea;
    }
    public get remoteArea(): string | undefined {
        return this['remote_area'];
    }
    public withSpecCodeId(specCodeId: string): CreateGlobalConnectionBandwidth {
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
export enum CreateGlobalConnectionBandwidthTypeEnum {
    REGION = 'Region',
    SUBAREA = 'SubArea',
    AREA = 'Area',
    TRSAREA = 'TrsArea'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateGlobalConnectionBandwidthChargeModeEnum {
    BWD = 'bwd',
    E_95 = '95'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateGlobalConnectionBandwidthSlaLevelEnum {
    PT = 'Pt',
    AU = 'Au',
    AG = 'Ag'
}
