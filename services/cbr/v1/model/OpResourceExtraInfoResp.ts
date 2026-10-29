import { ResourceExtraInfoIncludeVolumesResp } from './ResourceExtraInfoIncludeVolumesResp';


export class OpResourceExtraInfoResp {
    private 'exclude_volumes'?: Array<string>;
    private 'include_volumes'?: Array<ResourceExtraInfoIncludeVolumesResp>;
    public constructor() { 
    }
    public withExcludeVolumes(excludeVolumes: Array<string>): OpResourceExtraInfoResp {
        this['exclude_volumes'] = excludeVolumes;
        return this;
    }
    public set excludeVolumes(excludeVolumes: Array<string>  | undefined) {
        this['exclude_volumes'] = excludeVolumes;
    }
    public get excludeVolumes(): Array<string> | undefined {
        return this['exclude_volumes'];
    }
    public withIncludeVolumes(includeVolumes: Array<ResourceExtraInfoIncludeVolumesResp>): OpResourceExtraInfoResp {
        this['include_volumes'] = includeVolumes;
        return this;
    }
    public set includeVolumes(includeVolumes: Array<ResourceExtraInfoIncludeVolumesResp>  | undefined) {
        this['include_volumes'] = includeVolumes;
    }
    public get includeVolumes(): Array<ResourceExtraInfoIncludeVolumesResp> | undefined {
        return this['include_volumes'];
    }
}