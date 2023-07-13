

export class PipelineTemplate {
    public name?: string;
    public id?: string;
    public description?: string;
    private 'region_id'?: string | undefined;
    public url?: string;
    public constructor() { 
    }
    public withName(name: string): PipelineTemplate {
        this['name'] = name;
        return this;
    }
    public withId(id: string): PipelineTemplate {
        this['id'] = id;
        return this;
    }
    public withDescription(description: string): PipelineTemplate {
        this['description'] = description;
        return this;
    }
    public withRegionId(regionId: string): PipelineTemplate {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId() {
        return this['region_id'];
    }
    public withUrl(url: string): PipelineTemplate {
        this['url'] = url;
        return this;
    }
}