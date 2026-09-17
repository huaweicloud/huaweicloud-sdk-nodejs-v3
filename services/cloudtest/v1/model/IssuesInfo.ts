import { WorkItemInfo } from './WorkItemInfo';


export class IssuesInfo {
    private 'workitem_list'?: Array<WorkItemInfo>;
    public constructor(workitemList?: Array<WorkItemInfo>) { 
        this['workitem_list'] = workitemList;
    }
    public withWorkitemList(workitemList: Array<WorkItemInfo>): IssuesInfo {
        this['workitem_list'] = workitemList;
        return this;
    }
    public set workitemList(workitemList: Array<WorkItemInfo>  | undefined) {
        this['workitem_list'] = workitemList;
    }
    public get workitemList(): Array<WorkItemInfo> | undefined {
        return this['workitem_list'];
    }
}