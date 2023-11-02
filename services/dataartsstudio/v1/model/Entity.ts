import { EntityPrivilegeInfo } from './EntityPrivilegeInfo';


export class Entity {
    public version?: number;
    private 'relationship_attributes'?: object;
    private 'super_type_names'?: Array<string>;
    private 'business_attributes'?: object;
    private 'multi_attributes'?: object;
    private 'privilege_info'?: EntityPrivilegeInfo;
    private 'extended_attributes'?: object;
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
    public withVersion(version: number): Entity {
        this['version'] = version;
        return this;
    }
    public withRelationshipAttributes(relationshipAttributes: object): Entity {
        this['relationship_attributes'] = relationshipAttributes;
        return this;
    }
    public set relationshipAttributes(relationshipAttributes: object  | undefined) {
        this['relationship_attributes'] = relationshipAttributes;
    }
    public get relationshipAttributes(): object | undefined {
        return this['relationship_attributes'];
    }
    public withSuperTypeNames(superTypeNames: Array<string>): Entity {
        this['super_type_names'] = superTypeNames;
        return this;
    }
    public set superTypeNames(superTypeNames: Array<string>  | undefined) {
        this['super_type_names'] = superTypeNames;
    }
    public get superTypeNames(): Array<string> | undefined {
        return this['super_type_names'];
    }
    public withBusinessAttributes(businessAttributes: object): Entity {
        this['business_attributes'] = businessAttributes;
        return this;
    }
    public set businessAttributes(businessAttributes: object  | undefined) {
        this['business_attributes'] = businessAttributes;
    }
    public get businessAttributes(): object | undefined {
        return this['business_attributes'];
    }
    public withMultiAttributes(multiAttributes: object): Entity {
        this['multi_attributes'] = multiAttributes;
        return this;
    }
    public set multiAttributes(multiAttributes: object  | undefined) {
        this['multi_attributes'] = multiAttributes;
    }
    public get multiAttributes(): object | undefined {
        return this['multi_attributes'];
    }
    public withPrivilegeInfo(privilegeInfo: EntityPrivilegeInfo): Entity {
        this['privilege_info'] = privilegeInfo;
        return this;
    }
    public set privilegeInfo(privilegeInfo: EntityPrivilegeInfo  | undefined) {
        this['privilege_info'] = privilegeInfo;
    }
    public get privilegeInfo(): EntityPrivilegeInfo | undefined {
        return this['privilege_info'];
    }
    public withExtendedAttributes(extendedAttributes: object): Entity {
        this['extended_attributes'] = extendedAttributes;
        return this;
    }
    public set extendedAttributes(extendedAttributes: object  | undefined) {
        this['extended_attributes'] = extendedAttributes;
    }
    public get extendedAttributes(): object | undefined {
        return this['extended_attributes'];
    }
    public withGuid(guid: string): Entity {
        this['guid'] = guid;
        return this;
    }
    public withTypeName(typeName: string): Entity {
        this['type_name'] = typeName;
        return this;
    }
    public set typeName(typeName: string  | undefined) {
        this['type_name'] = typeName;
    }
    public get typeName(): string | undefined {
        return this['type_name'];
    }
    public withTypeDisplayName(typeDisplayName: string): Entity {
        this['type_display_name'] = typeDisplayName;
        return this;
    }
    public set typeDisplayName(typeDisplayName: string  | undefined) {
        this['type_display_name'] = typeDisplayName;
    }
    public get typeDisplayName(): string | undefined {
        return this['type_display_name'];
    }
    public withDisplayText(displayText: string): Entity {
        this['display_text'] = displayText;
        return this;
    }
    public set displayText(displayText: string  | undefined) {
        this['display_text'] = displayText;
    }
    public get displayText(): string | undefined {
        return this['display_text'];
    }
    public withAttributes(attributes: object): Entity {
        this['attributes'] = attributes;
        return this;
    }
    public withUpdatedAttributes(updatedAttributes: Array<string>): Entity {
        this['updated_attributes'] = updatedAttributes;
        return this;
    }
    public set updatedAttributes(updatedAttributes: Array<string>  | undefined) {
        this['updated_attributes'] = updatedAttributes;
    }
    public get updatedAttributes(): Array<string> | undefined {
        return this['updated_attributes'];
    }
    public withProjectId(projectId: string): Entity {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDomainId(domainId: string): Entity {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withInstanceId(instanceId: Array<string>): Entity {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: Array<string>  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): Array<string> | undefined {
        return this['instance_id'];
    }
    public withWorkspaceId(workspaceId: Array<string>): Entity {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: Array<string>  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): Array<string> | undefined {
        return this['workspace_id'];
    }
    public withStatus(status: string): Entity {
        this['status'] = status;
        return this;
    }
    public withCreatedBy(createdBy: string): Entity {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withUpdatedBy(updatedBy: string): Entity {
        this['updated_by'] = updatedBy;
        return this;
    }
    public set updatedBy(updatedBy: string  | undefined) {
        this['updated_by'] = updatedBy;
    }
    public get updatedBy(): string | undefined {
        return this['updated_by'];
    }
    public withCreateTime(createTime: string): Entity {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): Entity {
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