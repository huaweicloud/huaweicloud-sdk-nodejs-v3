import { ShowRelatedProjectResultProjectInfoList } from './ShowRelatedProjectResultProjectInfoList';


export class ShowRelatedProjectResult {
    public total?: number;
    private 'project_info_list'?: Array<ShowRelatedProjectResultProjectInfoList>;
    public constructor() { 
    }
    public withTotal(total: number): ShowRelatedProjectResult {
        this['total'] = total;
        return this;
    }
    public withProjectInfoList(projectInfoList: Array<ShowRelatedProjectResultProjectInfoList>): ShowRelatedProjectResult {
        this['project_info_list'] = projectInfoList;
        return this;
    }
    public set projectInfoList(projectInfoList: Array<ShowRelatedProjectResultProjectInfoList>  | undefined) {
        this['project_info_list'] = projectInfoList;
    }
    public get projectInfoList(): Array<ShowRelatedProjectResultProjectInfoList> | undefined {
        return this['project_info_list'];
    }
}