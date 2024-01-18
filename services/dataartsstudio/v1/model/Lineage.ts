import { Entity } from './Entity';


export class Lineage {
    private 'relation_type_name'?: string;
    public direction?: string;
    private 'ep1_id'?: string;
    private 'ep1_type_name'?: string;
    private 'ep2_id'?: string;
    private 'ep2_type_name'?: string;
    public end1?: Entity;
    public end2?: Entity;
    private 'propagate_tag'?: string;
    public guid?: string;
    private 'type_name'?: string;
    private 'type_display_name'?: string;
    private 'display_text'?: string;
    public attributes?: object;
    private 'updated_attributes'?: Array<string>;
    private 'project_id'?: string;
    private 'domain_id'?: string;
    private 'instance_id'?: Array<string>;
    private 'workspace_id'?: Array<string>;
    public status?: string;
    private 'created_by'?: string;
    private 'updated_by'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withRelationTypeName(relationTypeName: string): Lineage {
        this['relation_type_name'] = relationTypeName;
        return this;
    }
    public set relationTypeName(relationTypeName: string  | undefined) {
        this['relation_type_name'] = relationTypeName;
    }
    public get relationTypeName(): string | undefined {
        return this['relation_type_name'];
    }
    public withDirection(direction: string): Lineage {
        this['direction'] = direction;
        return this;
    }
    public withEp1Id(ep1Id: string): Lineage {
        this['ep1_id'] = ep1Id;
        return this;
    }
    public set ep1Id(ep1Id: string  | undefined) {
        this['ep1_id'] = ep1Id;
    }
    public get ep1Id(): string | undefined {
        return this['ep1_id'];
    }
    public withEp1TypeName(ep1TypeName: string): Lineage {
        this['ep1_type_name'] = ep1TypeName;
        return this;
    }
    public set ep1TypeName(ep1TypeName: string  | undefined) {
        this['ep1_type_name'] = ep1TypeName;
    }
    public get ep1TypeName(): string | undefined {
        return this['ep1_type_name'];
    }
    public withEp2Id(ep2Id: string): Lineage {
        this['ep2_id'] = ep2Id;
        return this;
    }
    public set ep2Id(ep2Id: string  | undefined) {
        this['ep2_id'] = ep2Id;
    }
    public get ep2Id(): string | undefined {
        return this['ep2_id'];
    }
    public withEp2TypeName(ep2TypeName: string): Lineage {
        this['ep2_type_name'] = ep2TypeName;
        return this;
    }
    public set ep2TypeName(ep2TypeName: string  | undefined) {
        this['ep2_type_name'] = ep2TypeName;
    }
    public get ep2TypeName(): string | undefined {
        return this['ep2_type_name'];
    }
    public withEnd1(end1: Entity): Lineage {
        this['end1'] = end1;
        return this;
    }
    public withEnd2(end2: Entity): Lineage {
        this['end2'] = end2;
        return this;
    }
    public withPropagateTag(propagateTag: string): Lineage {
        this['propagate_tag'] = propagateTag;
        return this;
    }
    public set propagateTag(propagateTag: string  | undefined) {
        this['propagate_tag'] = propagateTag;
    }
    public get propagateTag(): string | undefined {
        return this['propagate_tag'];
    }
    public withGuid(guid: string): Lineage {
        this['guid'] = guid;
        return this;
    }
    public withTypeName(typeName: string): Lineage {
        this['type_name'] = typeName;
        return this;
    }
    public set typeName(typeName: string  | undefined) {
        this['type_name'] = typeName;
    }
    public get typeName(): string | undefined {
        return this['type_name'];
    }
    public withTypeDisplayName(typeDisplayName: string): Lineage {
        this['type_display_name'] = typeDisplayName;
        return this;
    }
    public set typeDisplayName(typeDisplayName: string  | undefined) {
        this['type_display_name'] = typeDisplayName;
    }
    public get typeDisplayName(): string | undefined {
        return this['type_display_name'];
    }
    public withDisplayText(displayText: string): Lineage {
        this['display_text'] = displayText;
        return this;
    }
    public set displayText(displayText: string  | undefined) {
        this['display_text'] = displayText;
    }
    public get displayText(): string | undefined {
        return this['display_text'];
    }
    public withAttributes(attributes: object): Lineage {
        this['attributes'] = attributes;
        return this;
    }
    public withUpdatedAttributes(updatedAttributes: Array<string>): Lineage {
        this['updated_attributes'] = updatedAttributes;
        return this;
    }
    public set updatedAttributes(updatedAttributes: Array<string>  | undefined) {
        this['updated_attributes'] = updatedAttributes;
    }
    public get updatedAttributes(): Array<string> | undefined {
        return this['updated_attributes'];
    }
    public withProjectId(projectId: string): Lineage {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDomainId(domainId: string): Lineage {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withInstanceId(instanceId: Array<string>): Lineage {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: Array<string>  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): Array<string> | undefined {
        return this['instance_id'];
    }
    public withWorkspaceId(workspaceId: Array<string>): Lineage {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: Array<string>  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): Array<string> | undefined {
        return this['workspace_id'];
    }
    public withStatus(status: string): Lineage {
        this['status'] = status;
        return this;
    }
    public withCreatedBy(createdBy: string): Lineage {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withUpdatedBy(updatedBy: string): Lineage {
        this['updated_by'] = updatedBy;
        return this;
    }
    public set updatedBy(updatedBy: string  | undefined) {
        this['updated_by'] = updatedBy;
    }
    public get updatedBy(): string | undefined {
        return this['updated_by'];
    }
    public withCreateTime(createTime: string): Lineage {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): Lineage {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}