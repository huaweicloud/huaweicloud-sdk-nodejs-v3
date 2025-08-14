import { ApplicationAssignmentDto } from './ApplicationAssignmentDto';
import { PageInfoDto } from './PageInfoDto';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApplicationAssignmentsForPrincipalResponse extends SdkResponse {
    private 'application_assignments'?: Array<ApplicationAssignmentDto>;
    private 'page_info'?: PageInfoDto;
    public constructor() { 
        super();
    }
    public withApplicationAssignments(applicationAssignments: Array<ApplicationAssignmentDto>): ListApplicationAssignmentsForPrincipalResponse {
        this['application_assignments'] = applicationAssignments;
        return this;
    }
    public set applicationAssignments(applicationAssignments: Array<ApplicationAssignmentDto>  | undefined) {
        this['application_assignments'] = applicationAssignments;
    }
    public get applicationAssignments(): Array<ApplicationAssignmentDto> | undefined {
        return this['application_assignments'];
    }
    public withPageInfo(pageInfo: PageInfoDto): ListApplicationAssignmentsForPrincipalResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfoDto  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfoDto | undefined {
        return this['page_info'];
    }
}