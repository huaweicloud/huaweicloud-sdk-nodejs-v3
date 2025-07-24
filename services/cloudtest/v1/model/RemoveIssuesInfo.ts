import { WorkItemInfo } from './WorkItemInfo';


export class RemoveIssuesInfo {
    private 'workitem_list'?: Array<WorkItemInfo>;
    private 'is_delete_case'?: boolean;
    public constructor(workitemList?: Array<WorkItemInfo>) { 
        this['workitem_list'] = workitemList;
    }
    public withWorkitemList(workitemList: Array<WorkItemInfo>): RemoveIssuesInfo {
        this['workitem_list'] = workitemList;
        return this;
    }
    public set workitemList(workitemList: Array<WorkItemInfo>  | undefined) {
        this['workitem_list'] = workitemList;
    }
    public get workitemList(): Array<WorkItemInfo> | undefined {
        return this['workitem_list'];
    }
    public withIsDeleteCase(isDeleteCase: boolean): RemoveIssuesInfo {
        this['is_delete_case'] = isDeleteCase;
        return this;
    }
    public set isDeleteCase(isDeleteCase: boolean  | undefined) {
        this['is_delete_case'] = isDeleteCase;
    }
    public get isDeleteCase(): boolean | undefined {
        return this['is_delete_case'];
    }
}