
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateHyperinstanceGroupResponse extends SdkResponse {
    public id?: string;
    public name?: string;
    private 'npu_count_limit'?: string;
    private 'npu_count'?: string;
    private 'hyperinstance_cluster_id'?: string;
    private 'created_at'?: number;
    private 'updated_at'?: number;
    public constructor() { 
        super();
    }
    public withId(id: string): CreateHyperinstanceGroupResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CreateHyperinstanceGroupResponse {
        this['name'] = name;
        return this;
    }
    public withNpuCountLimit(npuCountLimit: string): CreateHyperinstanceGroupResponse {
        this['npu_count_limit'] = npuCountLimit;
        return this;
    }
    public set npuCountLimit(npuCountLimit: string  | undefined) {
        this['npu_count_limit'] = npuCountLimit;
    }
    public get npuCountLimit(): string | undefined {
        return this['npu_count_limit'];
    }
    public withNpuCount(npuCount: string): CreateHyperinstanceGroupResponse {
        this['npu_count'] = npuCount;
        return this;
    }
    public set npuCount(npuCount: string  | undefined) {
        this['npu_count'] = npuCount;
    }
    public get npuCount(): string | undefined {
        return this['npu_count'];
    }
    public withHyperinstanceClusterId(hyperinstanceClusterId: string): CreateHyperinstanceGroupResponse {
        this['hyperinstance_cluster_id'] = hyperinstanceClusterId;
        return this;
    }
    public set hyperinstanceClusterId(hyperinstanceClusterId: string  | undefined) {
        this['hyperinstance_cluster_id'] = hyperinstanceClusterId;
    }
    public get hyperinstanceClusterId(): string | undefined {
        return this['hyperinstance_cluster_id'];
    }
    public withCreatedAt(createdAt: number): CreateHyperinstanceGroupResponse {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: number  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): number | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: number): CreateHyperinstanceGroupResponse {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: number  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): number | undefined {
        return this['updated_at'];
    }
}