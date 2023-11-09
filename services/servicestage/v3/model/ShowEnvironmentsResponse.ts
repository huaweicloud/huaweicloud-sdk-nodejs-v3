import { EnvironmentListView } from './EnvironmentListView';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEnvironmentsResponse extends SdkResponse {
    public count?: number;
    public environments?: Array<EnvironmentListView>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ShowEnvironmentsResponse {
        this['count'] = count;
        return this;
    }
    public withEnvironments(environments: Array<EnvironmentListView>): ShowEnvironmentsResponse {
        this['environments'] = environments;
        return this;
    }
}