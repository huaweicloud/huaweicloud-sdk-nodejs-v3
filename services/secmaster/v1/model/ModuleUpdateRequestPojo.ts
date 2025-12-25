

export class ModuleUpdateRequestPojo {
    private 'cloud_pack_id'?: string;
    private 'cloud_pack_name'?: string;
    private 'cloud_pack_version'?: string;
    public description?: string;
    private 'module_json'?: string;
    public name?: string;
    private 'update_time'?: string;
    public thumbnail?: string;
    private 'module_type'?: string;
    private 'metric_ids'?: string;
    private 'data_query'?: string;
    private 'boa_version'?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withCloudPackId(cloudPackId: string): ModuleUpdateRequestPojo {
        this['cloud_pack_id'] = cloudPackId;
        return this;
    }
    public set cloudPackId(cloudPackId: string  | undefined) {
        this['cloud_pack_id'] = cloudPackId;
    }
    public get cloudPackId(): string | undefined {
        return this['cloud_pack_id'];
    }
    public withCloudPackName(cloudPackName: string): ModuleUpdateRequestPojo {
        this['cloud_pack_name'] = cloudPackName;
        return this;
    }
    public set cloudPackName(cloudPackName: string  | undefined) {
        this['cloud_pack_name'] = cloudPackName;
    }
    public get cloudPackName(): string | undefined {
        return this['cloud_pack_name'];
    }
    public withCloudPackVersion(cloudPackVersion: string): ModuleUpdateRequestPojo {
        this['cloud_pack_version'] = cloudPackVersion;
        return this;
    }
    public set cloudPackVersion(cloudPackVersion: string  | undefined) {
        this['cloud_pack_version'] = cloudPackVersion;
    }
    public get cloudPackVersion(): string | undefined {
        return this['cloud_pack_version'];
    }
    public withDescription(description: string): ModuleUpdateRequestPojo {
        this['description'] = description;
        return this;
    }
    public withModuleJson(moduleJson: string): ModuleUpdateRequestPojo {
        this['module_json'] = moduleJson;
        return this;
    }
    public set moduleJson(moduleJson: string  | undefined) {
        this['module_json'] = moduleJson;
    }
    public get moduleJson(): string | undefined {
        return this['module_json'];
    }
    public withName(name: string): ModuleUpdateRequestPojo {
        this['name'] = name;
        return this;
    }
    public withUpdateTime(updateTime: string): ModuleUpdateRequestPojo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withThumbnail(thumbnail: string): ModuleUpdateRequestPojo {
        this['thumbnail'] = thumbnail;
        return this;
    }
    public withModuleType(moduleType: string): ModuleUpdateRequestPojo {
        this['module_type'] = moduleType;
        return this;
    }
    public set moduleType(moduleType: string  | undefined) {
        this['module_type'] = moduleType;
    }
    public get moduleType(): string | undefined {
        return this['module_type'];
    }
    public withMetricIds(metricIds: string): ModuleUpdateRequestPojo {
        this['metric_ids'] = metricIds;
        return this;
    }
    public set metricIds(metricIds: string  | undefined) {
        this['metric_ids'] = metricIds;
    }
    public get metricIds(): string | undefined {
        return this['metric_ids'];
    }
    public withDataQuery(dataQuery: string): ModuleUpdateRequestPojo {
        this['data_query'] = dataQuery;
        return this;
    }
    public set dataQuery(dataQuery: string  | undefined) {
        this['data_query'] = dataQuery;
    }
    public get dataQuery(): string | undefined {
        return this['data_query'];
    }
    public withBoaVersion(boaVersion: string): ModuleUpdateRequestPojo {
        this['boa_version'] = boaVersion;
        return this;
    }
    public set boaVersion(boaVersion: string  | undefined) {
        this['boa_version'] = boaVersion;
    }
    public get boaVersion(): string | undefined {
        return this['boa_version'];
    }
}