import { ErrorInfo } from './ErrorInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAssociatedResourceOpenStatusResponse extends SdkResponse {
    public status?: string;
    public errors?: Array<ErrorInfo>;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowAssociatedResourceOpenStatusResponse {
        this['status'] = status;
        return this;
    }
    public withErrors(errors: Array<ErrorInfo>): ShowAssociatedResourceOpenStatusResponse {
        this['errors'] = errors;
        return this;
    }
}