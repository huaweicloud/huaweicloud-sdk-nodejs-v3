
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowQueueDetailResponse extends SdkResponse {
    private 'is_success'?: boolean;
    public message?: string;
    private 'queue_id'?: number;
    public queueName?: string;
    public description?: string;
    public owner?: string;
    private 'create_time'?: number;
    public queueType?: string;
    public cuCount?: number;
    public chargingMode?: number;
    private 'resource_id'?: string;
    private 'resource_mode'?: number;
    private 'enterprise_project_id'?: string;
    private 'resource_type'?: string;
    private 'cu_spec'?: number;
    private 'cu_scale_out_limit'?: number;
    private 'cu_scale_in_limit'?: number;
    private 'elastic_resource_pool_name'?: string;
    public constructor() { 
        super();
    }
    public withIsSuccess(isSuccess: boolean): ShowQueueDetailResponse {
        this['is_success'] = isSuccess;
        return this;
    }
    public set isSuccess(isSuccess: boolean  | undefined) {
        this['is_success'] = isSuccess;
    }
    public get isSuccess(): boolean | undefined {
        return this['is_success'];
    }
    public withMessage(message: string): ShowQueueDetailResponse {
        this['message'] = message;
        return this;
    }
    public withQueueId(queueId: number): ShowQueueDetailResponse {
        this['queue_id'] = queueId;
        return this;
    }
    public set queueId(queueId: number  | undefined) {
        this['queue_id'] = queueId;
    }
    public get queueId(): number | undefined {
        return this['queue_id'];
    }
    public withQueueName(queueName: string): ShowQueueDetailResponse {
        this['queueName'] = queueName;
        return this;
    }
    public withDescription(description: string): ShowQueueDetailResponse {
        this['description'] = description;
        return this;
    }
    public withOwner(owner: string): ShowQueueDetailResponse {
        this['owner'] = owner;
        return this;
    }
    public withCreateTime(createTime: number): ShowQueueDetailResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withQueueType(queueType: string): ShowQueueDetailResponse {
        this['queueType'] = queueType;
        return this;
    }
    public withCuCount(cuCount: number): ShowQueueDetailResponse {
        this['cuCount'] = cuCount;
        return this;
    }
    public withChargingMode(chargingMode: number): ShowQueueDetailResponse {
        this['chargingMode'] = chargingMode;
        return this;
    }
    public withResourceId(resourceId: string): ShowQueueDetailResponse {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceMode(resourceMode: number): ShowQueueDetailResponse {
        this['resource_mode'] = resourceMode;
        return this;
    }
    public set resourceMode(resourceMode: number  | undefined) {
        this['resource_mode'] = resourceMode;
    }
    public get resourceMode(): number | undefined {
        return this['resource_mode'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowQueueDetailResponse {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withResourceType(resourceType: string): ShowQueueDetailResponse {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withCuSpec(cuSpec: number): ShowQueueDetailResponse {
        this['cu_spec'] = cuSpec;
        return this;
    }
    public set cuSpec(cuSpec: number  | undefined) {
        this['cu_spec'] = cuSpec;
    }
    public get cuSpec(): number | undefined {
        return this['cu_spec'];
    }
    public withCuScaleOutLimit(cuScaleOutLimit: number): ShowQueueDetailResponse {
        this['cu_scale_out_limit'] = cuScaleOutLimit;
        return this;
    }
    public set cuScaleOutLimit(cuScaleOutLimit: number  | undefined) {
        this['cu_scale_out_limit'] = cuScaleOutLimit;
    }
    public get cuScaleOutLimit(): number | undefined {
        return this['cu_scale_out_limit'];
    }
    public withCuScaleInLimit(cuScaleInLimit: number): ShowQueueDetailResponse {
        this['cu_scale_in_limit'] = cuScaleInLimit;
        return this;
    }
    public set cuScaleInLimit(cuScaleInLimit: number  | undefined) {
        this['cu_scale_in_limit'] = cuScaleInLimit;
    }
    public get cuScaleInLimit(): number | undefined {
        return this['cu_scale_in_limit'];
    }
    public withElasticResourcePoolName(elasticResourcePoolName: string): ShowQueueDetailResponse {
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
        return this;
    }
    public set elasticResourcePoolName(elasticResourcePoolName: string  | undefined) {
        this['elastic_resource_pool_name'] = elasticResourcePoolName;
    }
    public get elasticResourcePoolName(): string | undefined {
        return this['elastic_resource_pool_name'];
    }
}