

export class InputDataInfoRespDataset {
    public id?: string;
    private 'version_id'?: string;
    private 'obs_url'?: string;
    private 'service_type'?: string;
    public name?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): InputDataInfoRespDataset {
        this['id'] = id;
        return this;
    }
    public withVersionId(versionId: string): InputDataInfoRespDataset {
        this['version_id'] = versionId;
        return this;
    }
    public set versionId(versionId: string  | undefined) {
        this['version_id'] = versionId;
    }
    public get versionId(): string | undefined {
        return this['version_id'];
    }
    public withObsUrl(obsUrl: string): InputDataInfoRespDataset {
        this['obs_url'] = obsUrl;
        return this;
    }
    public set obsUrl(obsUrl: string  | undefined) {
        this['obs_url'] = obsUrl;
    }
    public get obsUrl(): string | undefined {
        return this['obs_url'];
    }
    public withServiceType(serviceType: string): InputDataInfoRespDataset {
        this['service_type'] = serviceType;
        return this;
    }
    public set serviceType(serviceType: string  | undefined) {
        this['service_type'] = serviceType;
    }
    public get serviceType(): string | undefined {
        return this['service_type'];
    }
    public withName(name: string): InputDataInfoRespDataset {
        this['name'] = name;
        return this;
    }
}