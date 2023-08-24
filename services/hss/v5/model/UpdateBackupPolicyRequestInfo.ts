import { BackupTriggerRequestInfo } from './BackupTriggerRequestInfo';
import { OperationDefinitionRequestInfo } from './OperationDefinitionRequestInfo';


export class UpdateBackupPolicyRequestInfo {
    public enabled?: boolean;
    private 'policy_id'?: string;
    private 'operation_definition'?: OperationDefinitionRequestInfo;
    public trigger?: BackupTriggerRequestInfo;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
    }
    public withEnabled(enabled: boolean): UpdateBackupPolicyRequestInfo {
        this['enabled'] = enabled;
        return this;
    }
    public withPolicyId(policyId: string): UpdateBackupPolicyRequestInfo {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withOperationDefinition(operationDefinition: OperationDefinitionRequestInfo): UpdateBackupPolicyRequestInfo {
        this['operation_definition'] = operationDefinition;
        return this;
    }
    public set operationDefinition(operationDefinition: OperationDefinitionRequestInfo  | undefined) {
        this['operation_definition'] = operationDefinition;
    }
    public get operationDefinition(): OperationDefinitionRequestInfo | undefined {
        return this['operation_definition'];
    }
    public withTrigger(trigger: BackupTriggerRequestInfo): UpdateBackupPolicyRequestInfo {
        this['trigger'] = trigger;
        return this;
    }
}