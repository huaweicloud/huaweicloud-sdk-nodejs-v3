import { CreatedAt } from './CreatedAt';
import { Description } from './Description';
import { DomainId } from './DomainId';
import { EnterpriseProjectId } from './EnterpriseProjectId';
import { GcbAdminState } from './GcbAdminState';
import { GcbBindingServiceAll } from './GcbBindingServiceAll';
import { GcbBorderCross } from './GcbBorderCross';
import { GcbChargeMode } from './GcbChargeMode';
import { GcbFrozen } from './GcbFrozen';
import { GcbLocalSiteCode } from './GcbLocalSiteCode';
import { GcbRemoteSiteCode } from './GcbRemoteSiteCode';
import { GcbShowLocalArea } from './GcbShowLocalArea';
import { GcbShowRemoveArea } from './GcbShowRemoveArea';
import { GcbSize } from './GcbSize';
import { GcbSlaLevel } from './GcbSlaLevel';
import { GcbSpecCodeId } from './GcbSpecCodeId';
import { GcbType } from './GcbType';
import { GlobalConnectionBandwidthAssociatedInstance } from './GlobalConnectionBandwidthAssociatedInstance';
import { NonRequiredName } from './NonRequiredName';
import { Tag } from './Tag';
import { Tags } from './Tags';
import { UUIDIdentifier } from './UUIDIdentifier';
import { UpdatedAt } from './UpdatedAt';


export class GlobalConnectionBandwidth {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'domain_id'?: string;
    public bordercross?: boolean;
    public type?: GlobalConnectionBandwidthTypeEnum | string;
    private 'binding_service'?: GlobalConnectionBandwidthBindingServiceEnum | string;
    private 'enterprise_project_id'?: string;
    private 'charge_mode'?: GlobalConnectionBandwidthChargeModeEnum | string;
    public size?: number;
    private 'sla_level'?: GlobalConnectionBandwidthSlaLevelEnum | string;
    private 'local_area'?: string;
    private 'remote_area'?: string;
    private 'local_site_code'?: string;
    private 'remote_site_code'?: string;
    private 'admin_state'?: GlobalConnectionBandwidthAdminStateEnum | string;
    public frozen?: boolean;
    private 'spec_code_id'?: string;
    public tags?: Array<Tag>;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'enable_share'?: boolean;
    public instances?: Array<GlobalConnectionBandwidthAssociatedInstance>;
    public constructor(id?: string, domainId?: string, createdAt?: Date, updatedAt?: Date) { 
        this['id'] = id;
        this['domain_id'] = domainId;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withId(id: string): GlobalConnectionBandwidth {
        this['id'] = id;
        return this;
    }
    public withName(name: string): GlobalConnectionBandwidth {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): GlobalConnectionBandwidth {
        this['description'] = description;
        return this;
    }
    public withDomainId(domainId: string): GlobalConnectionBandwidth {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withBordercross(bordercross: boolean): GlobalConnectionBandwidth {
        this['bordercross'] = bordercross;
        return this;
    }
    public withType(type: GlobalConnectionBandwidthTypeEnum | string): GlobalConnectionBandwidth {
        this['type'] = type;
        return this;
    }
    public withBindingService(bindingService: GlobalConnectionBandwidthBindingServiceEnum | string): GlobalConnectionBandwidth {
        this['binding_service'] = bindingService;
        return this;
    }
    public set bindingService(bindingService: GlobalConnectionBandwidthBindingServiceEnum | string  | undefined) {
        this['binding_service'] = bindingService;
    }
    public get bindingService(): GlobalConnectionBandwidthBindingServiceEnum | string | undefined {
        return this['binding_service'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): GlobalConnectionBandwidth {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withChargeMode(chargeMode: GlobalConnectionBandwidthChargeModeEnum | string): GlobalConnectionBandwidth {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: GlobalConnectionBandwidthChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): GlobalConnectionBandwidthChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
    public withSize(size: number): GlobalConnectionBandwidth {
        this['size'] = size;
        return this;
    }
    public withSlaLevel(slaLevel: GlobalConnectionBandwidthSlaLevelEnum | string): GlobalConnectionBandwidth {
        this['sla_level'] = slaLevel;
        return this;
    }
    public set slaLevel(slaLevel: GlobalConnectionBandwidthSlaLevelEnum | string  | undefined) {
        this['sla_level'] = slaLevel;
    }
    public get slaLevel(): GlobalConnectionBandwidthSlaLevelEnum | string | undefined {
        return this['sla_level'];
    }
    public withLocalArea(localArea: string): GlobalConnectionBandwidth {
        this['local_area'] = localArea;
        return this;
    }
    public set localArea(localArea: string  | undefined) {
        this['local_area'] = localArea;
    }
    public get localArea(): string | undefined {
        return this['local_area'];
    }
    public withRemoteArea(remoteArea: string): GlobalConnectionBandwidth {
        this['remote_area'] = remoteArea;
        return this;
    }
    public set remoteArea(remoteArea: string  | undefined) {
        this['remote_area'] = remoteArea;
    }
    public get remoteArea(): string | undefined {
        return this['remote_area'];
    }
    public withLocalSiteCode(localSiteCode: string): GlobalConnectionBandwidth {
        this['local_site_code'] = localSiteCode;
        return this;
    }
    public set localSiteCode(localSiteCode: string  | undefined) {
        this['local_site_code'] = localSiteCode;
    }
    public get localSiteCode(): string | undefined {
        return this['local_site_code'];
    }
    public withRemoteSiteCode(remoteSiteCode: string): GlobalConnectionBandwidth {
        this['remote_site_code'] = remoteSiteCode;
        return this;
    }
    public set remoteSiteCode(remoteSiteCode: string  | undefined) {
        this['remote_site_code'] = remoteSiteCode;
    }
    public get remoteSiteCode(): string | undefined {
        return this['remote_site_code'];
    }
    public withAdminState(adminState: GlobalConnectionBandwidthAdminStateEnum | string): GlobalConnectionBandwidth {
        this['admin_state'] = adminState;
        return this;
    }
    public set adminState(adminState: GlobalConnectionBandwidthAdminStateEnum | string  | undefined) {
        this['admin_state'] = adminState;
    }
    public get adminState(): GlobalConnectionBandwidthAdminStateEnum | string | undefined {
        return this['admin_state'];
    }
    public withFrozen(frozen: boolean): GlobalConnectionBandwidth {
        this['frozen'] = frozen;
        return this;
    }
    public withSpecCodeId(specCodeId: string): GlobalConnectionBandwidth {
        this['spec_code_id'] = specCodeId;
        return this;
    }
    public set specCodeId(specCodeId: string  | undefined) {
        this['spec_code_id'] = specCodeId;
    }
    public get specCodeId(): string | undefined {
        return this['spec_code_id'];
    }
    public withTags(tags: Array<Tag>): GlobalConnectionBandwidth {
        this['tags'] = tags;
        return this;
    }
    public withCreatedAt(createdAt: Date): GlobalConnectionBandwidth {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): GlobalConnectionBandwidth {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withEnableShare(enableShare: boolean): GlobalConnectionBandwidth {
        this['enable_share'] = enableShare;
        return this;
    }
    public set enableShare(enableShare: boolean  | undefined) {
        this['enable_share'] = enableShare;
    }
    public get enableShare(): boolean | undefined {
        return this['enable_share'];
    }
    public withInstances(instances: Array<GlobalConnectionBandwidthAssociatedInstance>): GlobalConnectionBandwidth {
        this['instances'] = instances;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum GlobalConnectionBandwidthTypeEnum {
    REGION = 'Region',
    SUBAREA = 'SubArea',
    AREA = 'Area',
    TRSAREA = 'TrsArea'
}
/**
    * @export
    * @enum {string}
    */
export enum GlobalConnectionBandwidthBindingServiceEnum {
    CC = 'CC',
    GEIP = 'GEIP',
    GCN = 'GCN',
    GSN = 'GSN',
    ALL = 'ALL'
}
/**
    * @export
    * @enum {string}
    */
export enum GlobalConnectionBandwidthChargeModeEnum {
    BWD = 'bwd',
    E_95 = '95'
}
/**
    * @export
    * @enum {string}
    */
export enum GlobalConnectionBandwidthSlaLevelEnum {
    PT = 'Pt',
    AU = 'Au',
    AG = 'Ag'
}
/**
    * @export
    * @enum {string}
    */
export enum GlobalConnectionBandwidthAdminStateEnum {
    NORMAL = 'NORMAL',
    FREEZED = 'FREEZED'
}
