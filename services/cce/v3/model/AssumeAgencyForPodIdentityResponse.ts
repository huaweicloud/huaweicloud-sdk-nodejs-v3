import { AssumedAgency } from './AssumedAgency';
import { Credentials } from './Credentials';
import { PodIdentitySubject } from './PodIdentitySubject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AssumeAgencyForPodIdentityResponse extends SdkResponse {
    public assumedAgency?: AssumedAgency;
    public audience?: string;
    public credentials?: Credentials;
    public podIdentityAssociationId?: string;
    public subject?: PodIdentitySubject;
    public constructor() { 
        super();
    }
    public withAssumedAgency(assumedAgency: AssumedAgency): AssumeAgencyForPodIdentityResponse {
        this['assumedAgency'] = assumedAgency;
        return this;
    }
    public withAudience(audience: string): AssumeAgencyForPodIdentityResponse {
        this['audience'] = audience;
        return this;
    }
    public withCredentials(credentials: Credentials): AssumeAgencyForPodIdentityResponse {
        this['credentials'] = credentials;
        return this;
    }
    public withPodIdentityAssociationId(podIdentityAssociationId: string): AssumeAgencyForPodIdentityResponse {
        this['podIdentityAssociationId'] = podIdentityAssociationId;
        return this;
    }
    public withSubject(subject: PodIdentitySubject): AssumeAgencyForPodIdentityResponse {
        this['subject'] = subject;
        return this;
    }
}