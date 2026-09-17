
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWorkitemConfigsResponse extends SdkResponse {
    private 'closed_workitem_readonly_mode'?: boolean;
    public constructor() { 
        super();
    }
    public withClosedWorkitemReadonlyMode(closedWorkitemReadonlyMode: boolean): ListWorkitemConfigsResponse {
        this['closed_workitem_readonly_mode'] = closedWorkitemReadonlyMode;
        return this;
    }
    public set closedWorkitemReadonlyMode(closedWorkitemReadonlyMode: boolean  | undefined) {
        this['closed_workitem_readonly_mode'] = closedWorkitemReadonlyMode;
    }
    public get closedWorkitemReadonlyMode(): boolean | undefined {
        return this['closed_workitem_readonly_mode'];
    }
}