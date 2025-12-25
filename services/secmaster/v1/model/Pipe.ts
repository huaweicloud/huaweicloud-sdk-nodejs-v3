

export class Pipe {
    private 'create_by'?: string;
    private 'create_time'?: number;
    private 'dataspace_id'?: string;
    private 'dataspace_name'?: string;
    public description?: string;
    private 'domain_id'?: string;
    private 'pipe_id'?: string;
    private 'pipe_name'?: string;
    private 'pipe_type'?: PipePipeTypeEnum | string;
    private 'project_id'?: string;
    public shards?: number;
    private 'storage_period'?: number;
    private 'update_by'?: string;
    private 'update_time'?: number;
    public constructor(createBy?: string, createTime?: number, dataspaceId?: string, dataspaceName?: string, description?: string, domainId?: string, pipeId?: string, pipeName?: string, projectId?: string, shards?: number, storagePeriod?: number, updateBy?: string, updateTime?: number) { 
        this['create_by'] = createBy;
        this['create_time'] = createTime;
        this['dataspace_id'] = dataspaceId;
        this['dataspace_name'] = dataspaceName;
        this['description'] = description;
        this['domain_id'] = domainId;
        this['pipe_id'] = pipeId;
        this['pipe_name'] = pipeName;
        this['project_id'] = projectId;
        this['shards'] = shards;
        this['storage_period'] = storagePeriod;
        this['update_by'] = updateBy;
        this['update_time'] = updateTime;
    }
    public withCreateBy(createBy: string): Pipe {
        this['create_by'] = createBy;
        return this;
    }
    public set createBy(createBy: string  | undefined) {
        this['create_by'] = createBy;
    }
    public get createBy(): string | undefined {
        return this['create_by'];
    }
    public withCreateTime(createTime: number): Pipe {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withDataspaceId(dataspaceId: string): Pipe {
        this['dataspace_id'] = dataspaceId;
        return this;
    }
    public set dataspaceId(dataspaceId: string  | undefined) {
        this['dataspace_id'] = dataspaceId;
    }
    public get dataspaceId(): string | undefined {
        return this['dataspace_id'];
    }
    public withDataspaceName(dataspaceName: string): Pipe {
        this['dataspace_name'] = dataspaceName;
        return this;
    }
    public set dataspaceName(dataspaceName: string  | undefined) {
        this['dataspace_name'] = dataspaceName;
    }
    public get dataspaceName(): string | undefined {
        return this['dataspace_name'];
    }
    public withDescription(description: string): Pipe {
        this['description'] = description;
        return this;
    }
    public withDomainId(domainId: string): Pipe {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withPipeId(pipeId: string): Pipe {
        this['pipe_id'] = pipeId;
        return this;
    }
    public set pipeId(pipeId: string  | undefined) {
        this['pipe_id'] = pipeId;
    }
    public get pipeId(): string | undefined {
        return this['pipe_id'];
    }
    public withPipeName(pipeName: string): Pipe {
        this['pipe_name'] = pipeName;
        return this;
    }
    public set pipeName(pipeName: string  | undefined) {
        this['pipe_name'] = pipeName;
    }
    public get pipeName(): string | undefined {
        return this['pipe_name'];
    }
    public withPipeType(pipeType: PipePipeTypeEnum | string): Pipe {
        this['pipe_type'] = pipeType;
        return this;
    }
    public set pipeType(pipeType: PipePipeTypeEnum | string  | undefined) {
        this['pipe_type'] = pipeType;
    }
    public get pipeType(): PipePipeTypeEnum | string | undefined {
        return this['pipe_type'];
    }
    public withProjectId(projectId: string): Pipe {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withShards(shards: number): Pipe {
        this['shards'] = shards;
        return this;
    }
    public withStoragePeriod(storagePeriod: number): Pipe {
        this['storage_period'] = storagePeriod;
        return this;
    }
    public set storagePeriod(storagePeriod: number  | undefined) {
        this['storage_period'] = storagePeriod;
    }
    public get storagePeriod(): number | undefined {
        return this['storage_period'];
    }
    public withUpdateBy(updateBy: string): Pipe {
        this['update_by'] = updateBy;
        return this;
    }
    public set updateBy(updateBy: string  | undefined) {
        this['update_by'] = updateBy;
    }
    public get updateBy(): string | undefined {
        return this['update_by'];
    }
    public withUpdateTime(updateTime: number): Pipe {
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

/**
    * @export
    * @enum {string}
    */
export enum PipePipeTypeEnum {
    SYSTEM_DEFINED = 'system-defined',
    USER_DEFINED = 'user-defined'
}
