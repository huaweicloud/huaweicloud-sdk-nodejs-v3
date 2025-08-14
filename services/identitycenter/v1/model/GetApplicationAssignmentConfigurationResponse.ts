
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetApplicationAssignmentConfigurationResponse extends SdkResponse {
    private 'assignment_required'?: boolean;
    public constructor() { 
        super();
    }
    public withAssignmentRequired(assignmentRequired: boolean): GetApplicationAssignmentConfigurationResponse {
        this['assignment_required'] = assignmentRequired;
        return this;
    }
    public set assignmentRequired(assignmentRequired: boolean  | undefined) {
        this['assignment_required'] = assignmentRequired;
    }
    public get assignmentRequired(): boolean | undefined {
        return this['assignment_required'];
    }
}