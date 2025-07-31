

export class ListProjectConfigsRequestBody {
    private 'config_name_list'?: Array<string>;
    public constructor(configNameList?: Array<string>) { 
        this['config_name_list'] = configNameList;
    }
    public withConfigNameList(configNameList: Array<string>): ListProjectConfigsRequestBody {
        this['config_name_list'] = configNameList;
        return this;
    }
    public set configNameList(configNameList: Array<string>  | undefined) {
        this['config_name_list'] = configNameList;
    }
    public get configNameList(): Array<string> | undefined {
        return this['config_name_list'];
    }
}