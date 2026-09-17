
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BindNodeResponse extends SdkResponse {
    private 'resource_id'?: string;
    public type?: string;
    private 'subsystem_count'?: number;
    private 'resource_type'?: string;
    private 'resource_spec_type'?: string;
    private 'associated_edge_node_id'?: string;
    private 'associated_edge_node_name'?: string;
    private 'extend_params'?: string;
    private 'resource_size'?: number;
    public constructor() { 
        super();
    }
    public withResourceId(resourceId: string): BindNodeResponse {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withType(type: string): BindNodeResponse {
        this['type'] = type;
        return this;
    }
    public withSubsystemCount(subsystemCount: number): BindNodeResponse {
        this['subsystem_count'] = subsystemCount;
        return this;
    }
    public set subsystemCount(subsystemCount: number  | undefined) {
        this['subsystem_count'] = subsystemCount;
    }
    public get subsystemCount(): number | undefined {
        return this['subsystem_count'];
    }
    public withResourceType(resourceType: string): BindNodeResponse {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceSpecType(resourceSpecType: string): BindNodeResponse {
        this['resource_spec_type'] = resourceSpecType;
        return this;
    }
    public set resourceSpecType(resourceSpecType: string  | undefined) {
        this['resource_spec_type'] = resourceSpecType;
    }
    public get resourceSpecType(): string | undefined {
        return this['resource_spec_type'];
    }
    public withAssociatedEdgeNodeId(associatedEdgeNodeId: string): BindNodeResponse {
        this['associated_edge_node_id'] = associatedEdgeNodeId;
        return this;
    }
    public set associatedEdgeNodeId(associatedEdgeNodeId: string  | undefined) {
        this['associated_edge_node_id'] = associatedEdgeNodeId;
    }
    public get associatedEdgeNodeId(): string | undefined {
        return this['associated_edge_node_id'];
    }
    public withAssociatedEdgeNodeName(associatedEdgeNodeName: string): BindNodeResponse {
        this['associated_edge_node_name'] = associatedEdgeNodeName;
        return this;
    }
    public set associatedEdgeNodeName(associatedEdgeNodeName: string  | undefined) {
        this['associated_edge_node_name'] = associatedEdgeNodeName;
    }
    public get associatedEdgeNodeName(): string | undefined {
        return this['associated_edge_node_name'];
    }
    public withExtendParams(extendParams: string): BindNodeResponse {
        this['extend_params'] = extendParams;
        return this;
    }
    public set extendParams(extendParams: string  | undefined) {
        this['extend_params'] = extendParams;
    }
    public get extendParams(): string | undefined {
        return this['extend_params'];
    }
    public withResourceSize(resourceSize: number): BindNodeResponse {
        this['resource_size'] = resourceSize;
        return this;
    }
    public set resourceSize(resourceSize: number  | undefined) {
        this['resource_size'] = resourceSize;
    }
    public get resourceSize(): number | undefined {
        return this['resource_size'];
    }
}