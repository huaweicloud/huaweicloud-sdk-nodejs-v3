

export class DeleteCicdConfigurationsRequestBody {
    private 'cicd_id_list'?: Array<string>;
    public constructor(cicdIdList?: Array<string>) { 
        this['cicd_id_list'] = cicdIdList;
    }
    public withCicdIdList(cicdIdList: Array<string>): DeleteCicdConfigurationsRequestBody {
        this['cicd_id_list'] = cicdIdList;
        return this;
    }
    public set cicdIdList(cicdIdList: Array<string>  | undefined) {
        this['cicd_id_list'] = cicdIdList;
    }
    public get cicdIdList(): Array<string> | undefined {
        return this['cicd_id_list'];
    }
}