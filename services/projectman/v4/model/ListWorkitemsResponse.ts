import { Workitems } from './Workitems';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWorkitemsResponse extends SdkResponse {
    private 'work_items'?: Array<Workitems>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withWorkItems(workItems: Array<Workitems>): ListWorkitemsResponse {
        this['work_items'] = workItems;
        return this;
    }
    public set workItems(workItems: Array<Workitems>  | undefined) {
        this['work_items'] = workItems;
    }
    public get workItems(): Array<Workitems> | undefined {
        return this['work_items'];
    }
    public withTotal(total: number): ListWorkitemsResponse {
        this['total'] = total;
        return this;
    }
}