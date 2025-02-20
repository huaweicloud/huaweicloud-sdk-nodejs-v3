import { BatchCreateApplicationViewRequestBodyApplicationList } from './BatchCreateApplicationViewRequestBodyApplicationList';
import { BatchCreateApplicationViewRequestBodyComponentList } from './BatchCreateApplicationViewRequestBodyComponentList';
import { BatchCreateApplicationViewRequestBodyGroupList } from './BatchCreateApplicationViewRequestBodyGroupList';


export class BatchCreateApplicationViewRequestBody {
    private 'application_list'?: Array<BatchCreateApplicationViewRequestBodyApplicationList>;
    private 'component_list'?: Array<BatchCreateApplicationViewRequestBodyComponentList>;
    private 'group_list'?: Array<BatchCreateApplicationViewRequestBodyGroupList>;
    public constructor(applicationList?: Array<BatchCreateApplicationViewRequestBodyApplicationList>) { 
        this['application_list'] = applicationList;
    }
    public withApplicationList(applicationList: Array<BatchCreateApplicationViewRequestBodyApplicationList>): BatchCreateApplicationViewRequestBody {
        this['application_list'] = applicationList;
        return this;
    }
    public set applicationList(applicationList: Array<BatchCreateApplicationViewRequestBodyApplicationList>  | undefined) {
        this['application_list'] = applicationList;
    }
    public get applicationList(): Array<BatchCreateApplicationViewRequestBodyApplicationList> | undefined {
        return this['application_list'];
    }
    public withComponentList(componentList: Array<BatchCreateApplicationViewRequestBodyComponentList>): BatchCreateApplicationViewRequestBody {
        this['component_list'] = componentList;
        return this;
    }
    public set componentList(componentList: Array<BatchCreateApplicationViewRequestBodyComponentList>  | undefined) {
        this['component_list'] = componentList;
    }
    public get componentList(): Array<BatchCreateApplicationViewRequestBodyComponentList> | undefined {
        return this['component_list'];
    }
    public withGroupList(groupList: Array<BatchCreateApplicationViewRequestBodyGroupList>): BatchCreateApplicationViewRequestBody {
        this['group_list'] = groupList;
        return this;
    }
    public set groupList(groupList: Array<BatchCreateApplicationViewRequestBodyGroupList>  | undefined) {
        this['group_list'] = groupList;
    }
    public get groupList(): Array<BatchCreateApplicationViewRequestBodyGroupList> | undefined {
        return this['group_list'];
    }
}