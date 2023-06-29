
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEvaluationStateByAssignmentIdResponse extends SdkResponse {
    private 'policy_assignment_id'?: string | undefined;
    public state?: string;
    private 'start_time'?: string | undefined;
    private 'end_time'?: string | undefined;
    private 'error_message'?: string | undefined;
    public constructor() { 
        super();
    }
    public withPolicyAssignmentId(policyAssignmentId: string): ShowEvaluationStateByAssignmentIdResponse {
        this['policy_assignment_id'] = policyAssignmentId;
        return this;
    }
    public set policyAssignmentId(policyAssignmentId: string | undefined) {
        this['policy_assignment_id'] = policyAssignmentId;
    }
    public get policyAssignmentId() {
        return this['policy_assignment_id'];
    }
    public withState(state: string): ShowEvaluationStateByAssignmentIdResponse {
        this['state'] = state;
        return this;
    }
    public withStartTime(startTime: string): ShowEvaluationStateByAssignmentIdResponse {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowEvaluationStateByAssignmentIdResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withErrorMessage(errorMessage: string): ShowEvaluationStateByAssignmentIdResponse {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage() {
        return this['error_message'];
    }
}