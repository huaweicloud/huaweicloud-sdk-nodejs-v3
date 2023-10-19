import { Authorisation } from './Authorisation';
import { RequestId } from './RequestId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAuthorisationResponse extends SdkResponse {
    private 'request_id'?: string;
    public authorisation?: Authorisation;
    public constructor(requestId?: string, authorisation?: Authorisation) { 
        super();
        this['request_id'] = requestId;
        this['authorisation'] = authorisation;
    }
    public withRequestId(requestId: string): CreateAuthorisationResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withAuthorisation(authorisation: Authorisation): CreateAuthorisationResponse {
        this['authorisation'] = authorisation;
        return this;
    }
}