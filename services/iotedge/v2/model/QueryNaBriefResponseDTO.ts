

export class QueryNaBriefResponseDTO {
    private 'na_id'?: string;
    public name?: string;
    public description?: string;
    public endpoint?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withNaId(naId: string): QueryNaBriefResponseDTO {
        this['na_id'] = naId;
        return this;
    }
    public set naId(naId: string  | undefined) {
        this['na_id'] = naId;
    }
    public get naId(): string | undefined {
        return this['na_id'];
    }
    public withName(name: string): QueryNaBriefResponseDTO {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): QueryNaBriefResponseDTO {
        this['description'] = description;
        return this;
    }
    public withEndpoint(endpoint: string): QueryNaBriefResponseDTO {
        this['endpoint'] = endpoint;
        return this;
    }
    public withCreateTime(createTime: string): QueryNaBriefResponseDTO {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): QueryNaBriefResponseDTO {
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