import { Tag } from './Tag';


export class EnterpriseRouter {
    public id: string;
    public name: string;
    public description?: string;
    public state: string;
    public tags?: Array<Tag>;
    private 'charge_mode'?: string | undefined;
    private 'created_at': Date | undefined;
    private 'updated_at': Date | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'project_id': string | undefined;
    public asn: number;
    private 'enable_default_propagation': boolean | undefined;
    private 'enable_default_association': boolean | undefined;
    private 'default_propagation_route_table_id'?: string | undefined;
    private 'default_association_route_table_id'?: string | undefined;
    private 'availability_zone_ids': Array<string> | undefined;
    private 'auto_accept_shared_attachments'?: boolean | undefined;
    public constructor(id?: any, name?: any, state?: any, createdAt?: any, updatedAt?: any, projectId?: any, asn?: any, enableDefaultPropagation?: any, enableDefaultAssociation?: any, availabilityZoneIds?: any) { 
        this['id'] = id;
        this['name'] = name;
        this['state'] = state;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['project_id'] = projectId;
        this['asn'] = asn;
        this['enable_default_propagation'] = enableDefaultPropagation;
        this['enable_default_association'] = enableDefaultAssociation;
        this['availability_zone_ids'] = availabilityZoneIds;
    }
    public withId(id: string): EnterpriseRouter {
        this['id'] = id;
        return this;
    }
    public withName(name: string): EnterpriseRouter {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): EnterpriseRouter {
        this['description'] = description;
        return this;
    }
    public withState(state: string): EnterpriseRouter {
        this['state'] = state;
        return this;
    }
    public withTags(tags: Array<Tag>): EnterpriseRouter {
        this['tags'] = tags;
        return this;
    }
    public withChargeMode(chargeMode: string): EnterpriseRouter {
        this['charge_mode'] = chargeMode;
        return this;
    }
    public set chargeMode(chargeMode: string | undefined) {
        this['charge_mode'] = chargeMode;
    }
    public get chargeMode() {
        return this['charge_mode'];
    }
    public withCreatedAt(createdAt: Date): EnterpriseRouter {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): EnterpriseRouter {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): EnterpriseRouter {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withProjectId(projectId: string): EnterpriseRouter {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withAsn(asn: number): EnterpriseRouter {
        this['asn'] = asn;
        return this;
    }
    public withEnableDefaultPropagation(enableDefaultPropagation: boolean): EnterpriseRouter {
        this['enable_default_propagation'] = enableDefaultPropagation;
        return this;
    }
    public set enableDefaultPropagation(enableDefaultPropagation: boolean | undefined) {
        this['enable_default_propagation'] = enableDefaultPropagation;
    }
    public get enableDefaultPropagation() {
        return this['enable_default_propagation'];
    }
    public withEnableDefaultAssociation(enableDefaultAssociation: boolean): EnterpriseRouter {
        this['enable_default_association'] = enableDefaultAssociation;
        return this;
    }
    public set enableDefaultAssociation(enableDefaultAssociation: boolean | undefined) {
        this['enable_default_association'] = enableDefaultAssociation;
    }
    public get enableDefaultAssociation() {
        return this['enable_default_association'];
    }
    public withDefaultPropagationRouteTableId(defaultPropagationRouteTableId: string): EnterpriseRouter {
        this['default_propagation_route_table_id'] = defaultPropagationRouteTableId;
        return this;
    }
    public set defaultPropagationRouteTableId(defaultPropagationRouteTableId: string | undefined) {
        this['default_propagation_route_table_id'] = defaultPropagationRouteTableId;
    }
    public get defaultPropagationRouteTableId() {
        return this['default_propagation_route_table_id'];
    }
    public withDefaultAssociationRouteTableId(defaultAssociationRouteTableId: string): EnterpriseRouter {
        this['default_association_route_table_id'] = defaultAssociationRouteTableId;
        return this;
    }
    public set defaultAssociationRouteTableId(defaultAssociationRouteTableId: string | undefined) {
        this['default_association_route_table_id'] = defaultAssociationRouteTableId;
    }
    public get defaultAssociationRouteTableId() {
        return this['default_association_route_table_id'];
    }
    public withAvailabilityZoneIds(availabilityZoneIds: Array<string>): EnterpriseRouter {
        this['availability_zone_ids'] = availabilityZoneIds;
        return this;
    }
    public set availabilityZoneIds(availabilityZoneIds: Array<string> | undefined) {
        this['availability_zone_ids'] = availabilityZoneIds;
    }
    public get availabilityZoneIds() {
        return this['availability_zone_ids'];
    }
    public withAutoAcceptSharedAttachments(autoAcceptSharedAttachments: boolean): EnterpriseRouter {
        this['auto_accept_shared_attachments'] = autoAcceptSharedAttachments;
        return this;
    }
    public set autoAcceptSharedAttachments(autoAcceptSharedAttachments: boolean | undefined) {
        this['auto_accept_shared_attachments'] = autoAcceptSharedAttachments;
    }
    public get autoAcceptSharedAttachments() {
        return this['auto_accept_shared_attachments'];
    }
}