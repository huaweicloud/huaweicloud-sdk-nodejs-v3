import { ErrorInfo } from './ErrorInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ChangeAssociatedResourceOpenStatusResponse extends SdkResponse {
    public status?: string;
    public errors?: Array<ErrorInfo>;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ChangeAssociatedResourceOpenStatusResponse {
        this['status'] = status;
        return this;
    }
    public withErrors(errors: Array<ErrorInfo>): ChangeAssociatedResourceOpenStatusResponse {
        this['errors'] = errors;
        return this;
    }
}