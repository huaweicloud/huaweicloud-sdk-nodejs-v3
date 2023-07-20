import { JobActions } from './JobActions';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowActionsResponse extends SdkResponse {
    private 'job_action'?: JobActions;
    public constructor() { 
        super();
    }
    public withJobAction(jobAction: JobActions): ShowActionsResponse {
        this['job_action'] = jobAction;
        return this;
    }
    public set jobAction(jobAction: JobActions  | undefined) {
        this['job_action'] = jobAction;
    }
    public get jobAction(): JobActions | undefined {
        return this['job_action'];
    }
}