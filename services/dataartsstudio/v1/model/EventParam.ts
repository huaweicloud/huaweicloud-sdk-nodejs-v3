import { DataMapFilterCriteria } from './DataMapFilterCriteria';


export class EventParam {
    public guid?: string;
    private 'type_name'?: string;
    private 'model_id'?: string;
    private 'property_name'?: string;
    private 'property_value'?: string;
    public query?: string;
    public filter?: DataMapFilterCriteria;
    private 'guid_list'?: Array<string>;
    private 'trace_id'?: string;
    private 'source_trace_id'?: string;
    private 'metadata_type_name'?: string;
    private 'super_type_names'?: string;
    private 'workspace_ids'?: Array<string>;
    public constructor() { 
    }
    public withGuid(guid: string): EventParam {
        this['guid'] = guid;
        return this;
    }
    public withTypeName(typeName: string): EventParam {
        this['type_name'] = typeName;
        return this;
    }
    public set typeName(typeName: string  | undefined) {
        this['type_name'] = typeName;
    }
    public get typeName(): string | undefined {
        return this['type_name'];
    }
    public withModelId(modelId: string): EventParam {
        this['model_id'] = modelId;
        return this;
    }
    public set modelId(modelId: string  | undefined) {
        this['model_id'] = modelId;
    }
    public get modelId(): string | undefined {
        return this['model_id'];
    }
    public withPropertyName(propertyName: string): EventParam {
        this['property_name'] = propertyName;
        return this;
    }
    public set propertyName(propertyName: string  | undefined) {
        this['property_name'] = propertyName;
    }
    public get propertyName(): string | undefined {
        return this['property_name'];
    }
    public withPropertyValue(propertyValue: string): EventParam {
        this['property_value'] = propertyValue;
        return this;
    }
    public set propertyValue(propertyValue: string  | undefined) {
        this['property_value'] = propertyValue;
    }
    public get propertyValue(): string | undefined {
        return this['property_value'];
    }
    public withQuery(query: string): EventParam {
        this['query'] = query;
        return this;
    }
    public withFilter(filter: DataMapFilterCriteria): EventParam {
        this['filter'] = filter;
        return this;
    }
    public withGuidList(guidList: Array<string>): EventParam {
        this['guid_list'] = guidList;
        return this;
    }
    public set guidList(guidList: Array<string>  | undefined) {
        this['guid_list'] = guidList;
    }
    public get guidList(): Array<string> | undefined {
        return this['guid_list'];
    }
    public withTraceId(traceId: string): EventParam {
        this['trace_id'] = traceId;
        return this;
    }
    public set traceId(traceId: string  | undefined) {
        this['trace_id'] = traceId;
    }
    public get traceId(): string | undefined {
        return this['trace_id'];
    }
    public withSourceTraceId(sourceTraceId: string): EventParam {
        this['source_trace_id'] = sourceTraceId;
        return this;
    }
    public set sourceTraceId(sourceTraceId: string  | undefined) {
        this['source_trace_id'] = sourceTraceId;
    }
    public get sourceTraceId(): string | undefined {
        return this['source_trace_id'];
    }
    public withMetadataTypeName(metadataTypeName: string): EventParam {
        this['metadata_type_name'] = metadataTypeName;
        return this;
    }
    public set metadataTypeName(metadataTypeName: string  | undefined) {
        this['metadata_type_name'] = metadataTypeName;
    }
    public get metadataTypeName(): string | undefined {
        return this['metadata_type_name'];
    }
    public withSuperTypeNames(superTypeNames: string): EventParam {
        this['super_type_names'] = superTypeNames;
        return this;
    }
    public set superTypeNames(superTypeNames: string  | undefined) {
        this['super_type_names'] = superTypeNames;
    }
    public get superTypeNames(): string | undefined {
        return this['super_type_names'];
    }
    public withWorkspaceIds(workspaceIds: Array<string>): EventParam {
        this['workspace_ids'] = workspaceIds;
        return this;
    }
    public set workspaceIds(workspaceIds: Array<string>  | undefined) {
        this['workspace_ids'] = workspaceIds;
    }
    public get workspaceIds(): Array<string> | undefined {
        return this['workspace_ids'];
    }
}