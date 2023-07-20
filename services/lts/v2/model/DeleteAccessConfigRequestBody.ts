

export class DeleteAccessConfigRequestBody {
    private 'access_config_id_list'?: Array<string>;
    public constructor(accessConfigIdList?: Array<string>) { 
        this['access_config_id_list'] = accessConfigIdList;
    }
    public withAccessConfigIdList(accessConfigIdList: Array<string>): DeleteAccessConfigRequestBody {
        this['access_config_id_list'] = accessConfigIdList;
        return this;
    }
    public set accessConfigIdList(accessConfigIdList: Array<string>  | undefined) {
        this['access_config_id_list'] = accessConfigIdList;
    }
    public get accessConfigIdList(): Array<string> | undefined {
        return this['access_config_id_list'];
    }
}