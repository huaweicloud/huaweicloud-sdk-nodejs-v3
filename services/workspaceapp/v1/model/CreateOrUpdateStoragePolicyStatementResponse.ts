
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateOrUpdateStoragePolicyStatementResponse extends SdkResponse {
    private 'policy_statement_id'?: string;
    public actions?: Array<string>;
    private 'roam_actions'?: Array<string>;
    public constructor() { 
        super();
    }
    public withPolicyStatementId(policyStatementId: string): CreateOrUpdateStoragePolicyStatementResponse {
        this['policy_statement_id'] = policyStatementId;
        return this;
    }
    public set policyStatementId(policyStatementId: string  | undefined) {
        this['policy_statement_id'] = policyStatementId;
    }
    public get policyStatementId(): string | undefined {
        return this['policy_statement_id'];
    }
    public withActions(actions: Array<string>): CreateOrUpdateStoragePolicyStatementResponse {
        this['actions'] = actions;
        return this;
    }
    public withRoamActions(roamActions: Array<string>): CreateOrUpdateStoragePolicyStatementResponse {
        this['roam_actions'] = roamActions;
        return this;
    }
    public set roamActions(roamActions: Array<string>  | undefined) {
        this['roam_actions'] = roamActions;
    }
    public get roamActions(): Array<string> | undefined {
        return this['roam_actions'];
    }
}