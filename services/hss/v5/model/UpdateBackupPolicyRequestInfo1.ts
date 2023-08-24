import { BackupTriggerRequestInfo1 } from './BackupTriggerRequestInfo1';
import { OperationDefinitionRequestInfo } from './OperationDefinitionRequestInfo';


export class UpdateBackupPolicyRequestInfo1 {
    public enabled?: boolean;
    private 'policy_id'?: string;
    private 'operation_definition'?: OperationDefinitionRequestInfo;
    public trigger?: BackupTriggerRequestInfo1;
    public constructor() { 
    }
    public withEnabled(enabled: boolean): UpdateBackupPolicyRequestInfo1 {
        this['enabled'] = enabled;
        return this;
    }
    public withPolicyId(policyId: string): UpdateBackupPolicyRequestInfo1 {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withOperationDefinition(operationDefinition: OperationDefinitionRequestInfo): UpdateBackupPolicyRequestInfo1 {
        this['operation_definition'] = operationDefinition;
        return this;
    }
    public set operationDefinition(operationDefinition: OperationDefinitionRequestInfo  | undefined) {
        this['operation_definition'] = operationDefinition;
    }
    public get operationDefinition(): OperationDefinitionRequestInfo | undefined {
        return this['operation_definition'];
    }
    public withTrigger(trigger: BackupTriggerRequestInfo1): UpdateBackupPolicyRequestInfo1 {
        this['trigger'] = trigger;
        return this;
    }
}