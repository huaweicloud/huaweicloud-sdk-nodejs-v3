
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePipeResponse extends SdkResponse {
    private 'domain_id'?: string;
    private 'project_id'?: string;
    private 'dataspace_id'?: string;
    private 'dataspace_name'?: string;
    private 'pipe_id'?: string;
    private 'pipe_name'?: string;
    private 'pipe_type'?: string;
    public description?: string;
    private 'storage_period'?: number;
    public shards?: number;
    private 'create_by'?: string;
    private 'create_time'?: number;
    private 'update_by'?: string;
    private 'update_time'?: number;
    public constructor() { 
        super();
    }
    public withDomainId(domainId: string): CreatePipeResponse {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withProjectId(projectId: string): CreatePipeResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDataspaceId(dataspaceId: string): CreatePipeResponse {
        this['dataspace_id'] = dataspaceId;
        return this;
    }
    public set dataspaceId(dataspaceId: string  | undefined) {
        this['dataspace_id'] = dataspaceId;
    }
    public get dataspaceId(): string | undefined {
        return this['dataspace_id'];
    }
    public withDataspaceName(dataspaceName: string): CreatePipeResponse {
        this['dataspace_name'] = dataspaceName;
        return this;
    }
    public set dataspaceName(dataspaceName: string  | undefined) {
        this['dataspace_name'] = dataspaceName;
    }
    public get dataspaceName(): string | undefined {
        return this['dataspace_name'];
    }
    public withPipeId(pipeId: string): CreatePipeResponse {
        this['pipe_id'] = pipeId;
        return this;
    }
    public set pipeId(pipeId: string  | undefined) {
        this['pipe_id'] = pipeId;
    }
    public get pipeId(): string | undefined {
        return this['pipe_id'];
    }
    public withPipeName(pipeName: string): CreatePipeResponse {
        this['pipe_name'] = pipeName;
        return this;
    }
    public set pipeName(pipeName: string  | undefined) {
        this['pipe_name'] = pipeName;
    }
    public get pipeName(): string | undefined {
        return this['pipe_name'];
    }
    public withPipeType(pipeType: string): CreatePipeResponse {
        this['pipe_type'] = pipeType;
        return this;
    }
    public set pipeType(pipeType: string  | undefined) {
        this['pipe_type'] = pipeType;
    }
    public get pipeType(): string | undefined {
        return this['pipe_type'];
    }
    public withDescription(description: string): CreatePipeResponse {
        this['description'] = description;
        return this;
    }
    public withStoragePeriod(storagePeriod: number): CreatePipeResponse {
        this['storage_period'] = storagePeriod;
        return this;
    }
    public set storagePeriod(storagePeriod: number  | undefined) {
        this['storage_period'] = storagePeriod;
    }
    public get storagePeriod(): number | undefined {
        return this['storage_period'];
    }
    public withShards(shards: number): CreatePipeResponse {
        this['shards'] = shards;
        return this;
    }
    public withCreateBy(createBy: string): CreatePipeResponse {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withCreateTime(createTime: number): CreatePipeResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateBy(updateBy: string): CreatePipeResponse {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withUpdateTime(updateTime: number): CreatePipeResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}