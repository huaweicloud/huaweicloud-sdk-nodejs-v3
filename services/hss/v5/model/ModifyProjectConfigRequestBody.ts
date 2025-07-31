import { ProjectConfigInfo } from './ProjectConfigInfo';


export class ModifyProjectConfigRequestBody {
    private 'config_info_list'?: Array<ProjectConfigInfo>;
    public cascade?: boolean;
    public constructor(configInfoList?: Array<ProjectConfigInfo>) { 
        this['config_info_list'] = configInfoList;
    }
    public withConfigInfoList(configInfoList: Array<ProjectConfigInfo>): ModifyProjectConfigRequestBody {
        this['config_info_list'] = configInfoList;
        return this;
    }
    public set configInfoList(configInfoList: Array<ProjectConfigInfo>  | undefined) {
        this['config_info_list'] = configInfoList;
    }
    public get configInfoList(): Array<ProjectConfigInfo> | undefined {
        return this['config_info_list'];
    }
    public withCascade(cascade: boolean): ModifyProjectConfigRequestBody {
        this['cascade'] = cascade;
        return this;
    }
}