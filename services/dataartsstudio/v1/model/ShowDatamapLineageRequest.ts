

export class ShowDatamapLineageRequest {
    public instance?: string;
    public guid?: string;
    public direction?: string;
    private 'relationship_types'?: Array<string>;
    private 'relationship_type_categories'?: Array<string>;
    private 'related_entity_types'?: Array<string>;
    private 'extend_process_data_flow'?: boolean;
    private 'include_parent_entity'?: boolean;
    public constructor(instance?: string, guid?: string) { 
        this['instance'] = instance;
        this['guid'] = guid;
    }
    public withInstance(instance: string): ShowDatamapLineageRequest {
        this['instance'] = instance;
        return this;
    }
    public withGuid(guid: string): ShowDatamapLineageRequest {
        this['guid'] = guid;
        return this;
    }
    public withDirection(direction: string): ShowDatamapLineageRequest {
        this['direction'] = direction;
        return this;
    }
    public withRelationshipTypes(relationshipTypes: Array<string>): ShowDatamapLineageRequest {
        this['relationship_types'] = relationshipTypes;
        return this;
    }
    public set relationshipTypes(relationshipTypes: Array<string>  | undefined) {
        this['relationship_types'] = relationshipTypes;
    }
    public get relationshipTypes(): Array<string> | undefined {
        return this['relationship_types'];
    }
    public withRelationshipTypeCategories(relationshipTypeCategories: Array<string>): ShowDatamapLineageRequest {
        this['relationship_type_categories'] = relationshipTypeCategories;
        return this;
    }
    public set relationshipTypeCategories(relationshipTypeCategories: Array<string>  | undefined) {
        this['relationship_type_categories'] = relationshipTypeCategories;
    }
    public get relationshipTypeCategories(): Array<string> | undefined {
        return this['relationship_type_categories'];
    }
    public withRelatedEntityTypes(relatedEntityTypes: Array<string>): ShowDatamapLineageRequest {
        this['related_entity_types'] = relatedEntityTypes;
        return this;
    }
    public set relatedEntityTypes(relatedEntityTypes: Array<string>  | undefined) {
        this['related_entity_types'] = relatedEntityTypes;
    }
    public get relatedEntityTypes(): Array<string> | undefined {
        return this['related_entity_types'];
    }
    public withExtendProcessDataFlow(extendProcessDataFlow: boolean): ShowDatamapLineageRequest {
        this['extend_process_data_flow'] = extendProcessDataFlow;
        return this;
    }
    public set extendProcessDataFlow(extendProcessDataFlow: boolean  | undefined) {
        this['extend_process_data_flow'] = extendProcessDataFlow;
    }
    public get extendProcessDataFlow(): boolean | undefined {
        return this['extend_process_data_flow'];
    }
    public withIncludeParentEntity(includeParentEntity: boolean): ShowDatamapLineageRequest {
        this['include_parent_entity'] = includeParentEntity;
        return this;
    }
    public set includeParentEntity(includeParentEntity: boolean  | undefined) {
        this['include_parent_entity'] = includeParentEntity;
    }
    public get includeParentEntity(): boolean | undefined {
        return this['include_parent_entity'];
    }
}