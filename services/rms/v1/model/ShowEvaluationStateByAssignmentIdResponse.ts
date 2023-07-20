
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEvaluationStateByAssignmentIdResponse extends SdkResponse {
    private 'policy_assignment_id'?: string;
    public state?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    private 'error_message'?: string;
    public constructor() { 
        super();
    }
    public withPolicyAssignmentId(policyAssignmentId: string): ShowEvaluationStateByAssignmentIdResponse {
        this['policy_assignment_id'] = policyAssignmentId;
        return this;
    }
    public set policyAssignmentId(policyAssignmentId: string  | undefined) {
        this['policy_assignment_id'] = policyAssignmentId;
    }
    public get policyAssignmentId(): string | undefined {
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
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ShowEvaluationStateByAssignmentIdResponse {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withErrorMessage(errorMessage: string): ShowEvaluationStateByAssignmentIdResponse {
        this['error_message'] = errorMessage;
        return this;
    }
    public set errorMessage(errorMessage: string  | undefined) {
        this['error_message'] = errorMessage;
    }
    public get errorMessage(): string | undefined {
        return this['error_message'];
    }
}