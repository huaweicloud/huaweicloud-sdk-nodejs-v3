import { ListRelatedProjectInfoResultProjectInfoList } from './ListRelatedProjectInfoResultProjectInfoList';


export class ListRelatedProjectInfoResult {
    public total?: number;
    private 'project_info_list'?: Array<ListRelatedProjectInfoResultProjectInfoList>;
    public constructor() { 
    }
    public withTotal(total: number): ListRelatedProjectInfoResult {
        this['total'] = total;
        return this;
    }
    public withProjectInfoList(projectInfoList: Array<ListRelatedProjectInfoResultProjectInfoList>): ListRelatedProjectInfoResult {
        this['project_info_list'] = projectInfoList;
        return this;
    }
    public set projectInfoList(projectInfoList: Array<ListRelatedProjectInfoResultProjectInfoList>  | undefined) {
        this['project_info_list'] = projectInfoList;
    }
    public get projectInfoList(): Array<ListRelatedProjectInfoResultProjectInfoList> | undefined {
        return this['project_info_list'];
    }
}