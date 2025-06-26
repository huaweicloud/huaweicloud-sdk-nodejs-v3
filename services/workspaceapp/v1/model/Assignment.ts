import { AttachType } from './AttachType';


export class Assignment {
    private 'policy_statement_id'?: string;
    public attach?: string;
    private 'attach_type'?: AttachType;
    public constructor(policyStatementId?: string, attach?: string, attachType?: AttachType) { 
        this['policy_statement_id'] = policyStatementId;
        this['attach'] = attach;
        this['attach_type'] = attachType;
    }
    public withPolicyStatementId(policyStatementId: string): Assignment {
        this['policy_statement_id'] = policyStatementId;
        return this;
    }
    public set policyStatementId(policyStatementId: string  | undefined) {
        this['policy_statement_id'] = policyStatementId;
    }
    public get policyStatementId(): string | undefined {
        return this['policy_statement_id'];
    }
    public withAttach(attach: string): Assignment {
        this['attach'] = attach;
        return this;
    }
    public withAttachType(attachType: AttachType): Assignment {
        this['attach_type'] = attachType;
        return this;
    }
    public set attachType(attachType: AttachType  | undefined) {
        this['attach_type'] = attachType;
    }
    public get attachType(): AttachType | undefined {
        return this['attach_type'];
    }
}