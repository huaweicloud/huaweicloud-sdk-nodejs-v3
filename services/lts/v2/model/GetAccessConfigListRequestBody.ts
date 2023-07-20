import { AccessConfigTag } from './AccessConfigTag';


export class GetAccessConfigListRequestBody {
    private 'access_config_name_list'?: Array<string>;
    private 'host_group_name_list'?: Array<string>;
    private 'log_group_name_list'?: Array<string>;
    private 'log_stream_name_list'?: Array<string>;
    private 'access_config_tag_list'?: Array<AccessConfigTag>;
    public constructor(accessConfigNameList?: Array<string>, hostGroupNameList?: Array<string>, logGroupNameList?: Array<string>, logStreamNameList?: Array<string>) { 
        this['access_config_name_list'] = accessConfigNameList;
        this['host_group_name_list'] = hostGroupNameList;
        this['log_group_name_list'] = logGroupNameList;
        this['log_stream_name_list'] = logStreamNameList;
    }
    public withAccessConfigNameList(accessConfigNameList: Array<string>): GetAccessConfigListRequestBody {
        this['access_config_name_list'] = accessConfigNameList;
        return this;
    }
    public set accessConfigNameList(accessConfigNameList: Array<string>  | undefined) {
        this['access_config_name_list'] = accessConfigNameList;
    }
    public get accessConfigNameList(): Array<string> | undefined {
        return this['access_config_name_list'];
    }
    public withHostGroupNameList(hostGroupNameList: Array<string>): GetAccessConfigListRequestBody {
        this['host_group_name_list'] = hostGroupNameList;
        return this;
    }
    public set hostGroupNameList(hostGroupNameList: Array<string>  | undefined) {
        this['host_group_name_list'] = hostGroupNameList;
    }
    public get hostGroupNameList(): Array<string> | undefined {
        return this['host_group_name_list'];
    }
    public withLogGroupNameList(logGroupNameList: Array<string>): GetAccessConfigListRequestBody {
        this['log_group_name_list'] = logGroupNameList;
        return this;
    }
    public set logGroupNameList(logGroupNameList: Array<string>  | undefined) {
        this['log_group_name_list'] = logGroupNameList;
    }
    public get logGroupNameList(): Array<string> | undefined {
        return this['log_group_name_list'];
    }
    public withLogStreamNameList(logStreamNameList: Array<string>): GetAccessConfigListRequestBody {
        this['log_stream_name_list'] = logStreamNameList;
        return this;
    }
    public set logStreamNameList(logStreamNameList: Array<string>  | undefined) {
        this['log_stream_name_list'] = logStreamNameList;
    }
    public get logStreamNameList(): Array<string> | undefined {
        return this['log_stream_name_list'];
    }
    public withAccessConfigTagList(accessConfigTagList: Array<AccessConfigTag>): GetAccessConfigListRequestBody {
        this['access_config_tag_list'] = accessConfigTagList;
        return this;
    }
    public set accessConfigTagList(accessConfigTagList: Array<AccessConfigTag>  | undefined) {
        this['access_config_tag_list'] = accessConfigTagList;
    }
    public get accessConfigTagList(): Array<AccessConfigTag> | undefined {
        return this['access_config_tag_list'];
    }
}