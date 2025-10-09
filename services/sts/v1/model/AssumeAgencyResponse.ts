import { AssumedAgencyDto } from './AssumedAgencyDto';
import { CredentialsDto } from './CredentialsDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AssumeAgencyResponse extends SdkResponse {
    private 'source_identity'?: string;
    private 'assumed_agency'?: AssumedAgencyDto;
    public credentials?: CredentialsDto;
    public constructor() { 
        super();
    }
    public withSourceIdentity(sourceIdentity: string): AssumeAgencyResponse {
        this['source_identity'] = sourceIdentity;
        return this;
    }
    public set sourceIdentity(sourceIdentity: string  | undefined) {
        this['source_identity'] = sourceIdentity;
    }
    public get sourceIdentity(): string | undefined {
        return this['source_identity'];
    }
    public withAssumedAgency(assumedAgency: AssumedAgencyDto): AssumeAgencyResponse {
        this['assumed_agency'] = assumedAgency;
        return this;
    }
    public set assumedAgency(assumedAgency: AssumedAgencyDto  | undefined) {
        this['assumed_agency'] = assumedAgency;
    }
    public get assumedAgency(): AssumedAgencyDto | undefined {
        return this['assumed_agency'];
    }
    public withCredentials(credentials: CredentialsDto): AssumeAgencyResponse {
        this['credentials'] = credentials;
        return this;
    }
}