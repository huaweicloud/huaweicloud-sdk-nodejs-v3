import { Authorisation } from './Authorisation';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAuthorisationResponse extends SdkResponse {
    public authorisation?: Authorisation;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withAuthorisation(authorisation: Authorisation): UpdateAuthorisationResponse {
        this['authorisation'] = authorisation;
        return this;
    }
    public withRequestId(requestId: string): UpdateAuthorisationResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}