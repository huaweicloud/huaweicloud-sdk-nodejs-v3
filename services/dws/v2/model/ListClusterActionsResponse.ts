import { ActionItemVo } from './ActionItemVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClusterActionsResponse extends SdkResponse {
    public id?: string;
    private 'action_name'?: string;
    public status?: string;
    private 'cluster_name'?: string;
    private 'submit_time'?: string;
    public items?: Array<ActionItemVo>;
    public constructor() { 
        super();
    }
    public withId(id: string): ListClusterActionsResponse {
        this['id'] = id;
        return this;
    }
    public withActionName(actionName: string): ListClusterActionsResponse {
        this['action_name'] = actionName;
        return this;
    }
    public set actionName(actionName: string  | undefined) {
        this['action_name'] = actionName;
    }
    public get actionName(): string | undefined {
        return this['action_name'];
    }
    public withStatus(status: string): ListClusterActionsResponse {
        this['status'] = status;
        return this;
    }
    public withClusterName(clusterName: string): ListClusterActionsResponse {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withSubmitTime(submitTime: string): ListClusterActionsResponse {
        this['submit_time'] = submitTime;
        return this;
    }
    public set submitTime(submitTime: string  | undefined) {
        this['submit_time'] = submitTime;
    }
    public get submitTime(): string | undefined {
        return this['submit_time'];
    }
    public withItems(items: Array<ActionItemVo>): ListClusterActionsResponse {
        this['items'] = items;
        return this;
    }
}