

export class ResourceExtraInfoIncludeVolumesResp {
    public id?: string;
    private 'os_version'?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): ResourceExtraInfoIncludeVolumesResp {
        this['id'] = id;
        return this;
    }
    public withOsVersion(osVersion: string): ResourceExtraInfoIncludeVolumesResp {
        this['os_version'] = osVersion;
        return this;
    }
    public set osVersion(osVersion: string  | undefined) {
        this['os_version'] = osVersion;
    }
    public get osVersion(): string | undefined {
        return this['os_version'];
    }
}