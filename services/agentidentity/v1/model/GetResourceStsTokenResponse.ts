import { GetResourceStsTokenResponseBodyAssumedAgency } from './GetResourceStsTokenResponseBodyAssumedAgency';
import { GetResourceStsTokenResponseBodyCredentials } from './GetResourceStsTokenResponseBodyCredentials';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetResourceStsTokenResponse extends SdkResponse {
    private 'source_identity'?: string;
    private 'assumed_agency'?: GetResourceStsTokenResponseBodyAssumedAgency;
    public credentials?: GetResourceStsTokenResponseBodyCredentials;
    public constructor() { 
        super();
    }
    public withSourceIdentity(sourceIdentity: string): GetResourceStsTokenResponse {
        this['source_identity'] = sourceIdentity;
        return this;
    }
    public set sourceIdentity(sourceIdentity: string  | undefined) {
        this['source_identity'] = sourceIdentity;
    }
    public get sourceIdentity(): string | undefined {
        return this['source_identity'];
    }
    public withAssumedAgency(assumedAgency: GetResourceStsTokenResponseBodyAssumedAgency): GetResourceStsTokenResponse {
        this['assumed_agency'] = assumedAgency;
        return this;
    }
    public set assumedAgency(assumedAgency: GetResourceStsTokenResponseBodyAssumedAgency  | undefined) {
        this['assumed_agency'] = assumedAgency;
    }
    public get assumedAgency(): GetResourceStsTokenResponseBodyAssumedAgency | undefined {
        return this['assumed_agency'];
    }
    public withCredentials(credentials: GetResourceStsTokenResponseBodyCredentials): GetResourceStsTokenResponse {
        this['credentials'] = credentials;
        return this;
    }
}