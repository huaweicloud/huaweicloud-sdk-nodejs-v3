import { ResourceExtraInfoIncludeVolumes } from './ResourceExtraInfoIncludeVolumes';


export class ResourceExtraInfo {
    private 'exclude_volumes'?: Array<string>;
    private 'include_volumes'?: Array<ResourceExtraInfoIncludeVolumes>;
    public constructor() { 
    }
    public withExcludeVolumes(excludeVolumes: Array<string>): ResourceExtraInfo {
        this['exclude_volumes'] = excludeVolumes;
        return this;
    }
    public set excludeVolumes(excludeVolumes: Array<string>  | undefined) {
        this['exclude_volumes'] = excludeVolumes;
    }
    public get excludeVolumes(): Array<string> | undefined {
        return this['exclude_volumes'];
    }
    public withIncludeVolumes(includeVolumes: Array<ResourceExtraInfoIncludeVolumes>): ResourceExtraInfo {
        this['include_volumes'] = includeVolumes;
        return this;
    }
    public set includeVolumes(includeVolumes: Array<ResourceExtraInfoIncludeVolumes>  | undefined) {
        this['include_volumes'] = includeVolumes;
    }
    public get includeVolumes(): Array<ResourceExtraInfoIncludeVolumes> | undefined {
        return this['include_volumes'];
    }
}