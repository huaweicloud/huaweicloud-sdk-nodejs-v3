import { AgencyUsage } from './AgencyUsage';
import { DeletionTaskStatus } from './DeletionTaskStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetServiceLinkedAgencyDeletionStatusV5Response extends SdkResponse {
    public status?: DeletionTaskStatus;
    public reason?: string;
    private 'agency_usage_list'?: Array<AgencyUsage>;
    public constructor() { 
        super();
    }
    public withStatus(status: DeletionTaskStatus): GetServiceLinkedAgencyDeletionStatusV5Response {
        this['status'] = status;
        return this;
    }
    public withReason(reason: string): GetServiceLinkedAgencyDeletionStatusV5Response {
        this['reason'] = reason;
        return this;
    }
    public withAgencyUsageList(agencyUsageList: Array<AgencyUsage>): GetServiceLinkedAgencyDeletionStatusV5Response {
        this['agency_usage_list'] = agencyUsageList;
        return this;
    }
    public set agencyUsageList(agencyUsageList: Array<AgencyUsage>  | undefined) {
        this['agency_usage_list'] = agencyUsageList;
    }
    public get agencyUsageList(): Array<AgencyUsage> | undefined {
        return this['agency_usage_list'];
    }
}