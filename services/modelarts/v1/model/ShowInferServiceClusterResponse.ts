import { InferFlavor } from './InferFlavor';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInferServiceClusterResponse extends SdkResponse {
    private 'workspace_id'?: string;
    private 'logic_cluster_id'?: string;
    public status?: ShowInferServiceClusterResponseStatusEnum | string;
    private 'pool_id'?: string;
    public type?: ShowInferServiceClusterResponseTypeEnum | string;
    private 'resource_categories'?: Array<string>;
    private 'project_id'?: string;
    private 'create_at'?: number;
    private 'update_at'?: number;
    public flavors?: Array<InferFlavor>;
    public constructor() { 
        super();
    }
    public withWorkspaceId(workspaceId: string): ShowInferServiceClusterResponse {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withLogicClusterId(logicClusterId: string): ShowInferServiceClusterResponse {
        this['logic_cluster_id'] = logicClusterId;
        return this;
    }
    public set logicClusterId(logicClusterId: string  | undefined) {
        this['logic_cluster_id'] = logicClusterId;
    }
    public get logicClusterId(): string | undefined {
        return this['logic_cluster_id'];
    }
    public withStatus(status: ShowInferServiceClusterResponseStatusEnum | string): ShowInferServiceClusterResponse {
        this['status'] = status;
        return this;
    }
    public withPoolId(poolId: string): ShowInferServiceClusterResponse {
        this['pool_id'] = poolId;
        return this;
    }
    public set poolId(poolId: string  | undefined) {
        this['pool_id'] = poolId;
    }
    public get poolId(): string | undefined {
        return this['pool_id'];
    }
    public withType(type: ShowInferServiceClusterResponseTypeEnum | string): ShowInferServiceClusterResponse {
        this['type'] = type;
        return this;
    }
    public withResourceCategories(resourceCategories: Array<string>): ShowInferServiceClusterResponse {
        this['resource_categories'] = resourceCategories;
        return this;
    }
    public set resourceCategories(resourceCategories: Array<string>  | undefined) {
        this['resource_categories'] = resourceCategories;
    }
    public get resourceCategories(): Array<string> | undefined {
        return this['resource_categories'];
    }
    public withProjectId(projectId: string): ShowInferServiceClusterResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCreateAt(createAt: number): ShowInferServiceClusterResponse {
        this['create_at'] = createAt;
        return this;
    }
    public set createAt(createAt: number  | undefined) {
        this['create_at'] = createAt;
    }
    public get createAt(): number | undefined {
        return this['create_at'];
    }
    public withUpdateAt(updateAt: number): ShowInferServiceClusterResponse {
        this['update_at'] = updateAt;
        return this;
    }
    public set updateAt(updateAt: number  | undefined) {
        this['update_at'] = updateAt;
    }
    public get updateAt(): number | undefined {
        return this['update_at'];
    }
    public withFlavors(flavors: Array<InferFlavor>): ShowInferServiceClusterResponse {
        this['flavors'] = flavors;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowInferServiceClusterResponseStatusEnum {
    ACTIVE = 'ACTIVE',
    PENDING = 'PENDING',
    INITIALIZING = 'INITIALIZING',
    INITIALIZE_FAILED = 'INITIALIZE_FAILED',
    DELETED = 'DELETED',
    DELETING = 'DELETING',
    DELETE_FAILED = 'DELETE_FAILED',
    MIGRATING = 'MIGRATING'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowInferServiceClusterResponseTypeEnum {
    MANAGED = 'MANAGED',
    MANAGED_ROMA = 'MANAGED_ROMA',
    DEDICATED = 'DEDICATED',
    DEDICATED_ROMA = 'DEDICATED_ROMA'
}
