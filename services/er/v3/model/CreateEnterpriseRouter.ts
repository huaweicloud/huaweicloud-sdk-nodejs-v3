import { Tag } from './Tag';


export class CreateEnterpriseRouter {
    public name?: string;
    public description?: string;
    public asn?: number;
    private 'enterprise_project_id'?: string;
    private 'charge_mode'?: CreateEnterpriseRouterChargeModeEnum | string;
    public tags?: Array<Tag>;
    private 'enable_default_propagation'?: boolean;
    private 'enable_default_association'?: boolean;
    private 'availability_zone_ids'?: Array<string>;
    private 'auto_accept_shared_attachments'?: boolean;
    public constructor(name?: string, asn?: number, availabilityZoneIds?: Array<string>) { 
        this['name'] = name;
        this['asn'] = asn;
        this['availability_zone_ids'] = availabilityZoneIds;
    }
    public withName(name: string): CreateEnterpriseRouter {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateEnterpriseRouter {
        this['description'] = description;
        return this;
    }
    public withAsn(asn: number): CreateEnterpriseRouter {
        this['asn'] = asn;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateEnterpriseRouter {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withChargeMode(chargeMode: CreateEnterpriseRouterChargeModeEnum | string): CreateEnterpriseRouter {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: CreateEnterpriseRouterChargeModeEnum | string  | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode(): CreateEnterpriseRouterChargeModeEnum | string | undefined {
        return this['charge_mode'];
    }
    public withTags(tags: Array<Tag>): CreateEnterpriseRouter {
        this['tags'] = tags;
        return this;
    }
    public withEnableDefaultPropagation(enableDefaultPropagation: boolean): CreateEnterpriseRouter {
        this['enable_default_propagation'] = enableDefaultPropagation;
        return this;
    }
    public set enableDefaultPropagation(enableDefaultPropagation: boolean  | undefined) {
        this['enable_default_propagation'] = enableDefaultPropagation;
    }
    public get enableDefaultPropagation(): boolean | undefined {
        return this['enable_default_propagation'];
    }
    public withEnableDefaultAssociation(enableDefaultAssociation: boolean): CreateEnterpriseRouter {
        this['enable_default_association'] = enableDefaultAssociation;
        return this;
    }
    public set enableDefaultAssociation(enableDefaultAssociation: boolean  | undefined) {
        this['enable_default_association'] = enableDefaultAssociation;
    }
    public get enableDefaultAssociation(): boolean | undefined {
        return this['enable_default_association'];
    }
    public withAvailabilityZoneIds(availabilityZoneIds: Array<string>): CreateEnterpriseRouter {
        this['availability_zone_ids'] = availabilityZoneIds;
        return this;
    }
    public set availabilityZoneIds(availabilityZoneIds: Array<string>  | undefined) {
        this['availability_zone_ids'] = availabilityZoneIds;
    }
    public get availabilityZoneIds(): Array<string> | undefined {
        return this['availability_zone_ids'];
    }
    public withAutoAcceptSharedAttachments(autoAcceptSharedAttachments: boolean): CreateEnterpriseRouter {
        this['auto_accept_shared_attachments'] = autoAcceptSharedAttachments;
        return this;
    }
    public set autoAcceptSharedAttachments(autoAcceptSharedAttachments: boolean  | undefined) {
        this['auto_accept_shared_attachments'] = autoAcceptSharedAttachments;
    }
    public get autoAcceptSharedAttachments(): boolean | undefined {
        return this['auto_accept_shared_attachments'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateEnterpriseRouterChargeModeEnum {
    POSTPAID = 'postPaid',
    PREPAID = 'prePaid'
}
