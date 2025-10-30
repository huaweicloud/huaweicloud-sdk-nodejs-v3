import { BackupTriggerInfo } from './BackupTriggerInfo';
import { OperationDefinitionInfo } from './OperationDefinitionInfo';


export class GetBackupPolicyResponseInfo {
    public enabled?: boolean;
    public id?: string;
    public name?: string;
    private 'operation_type'?: string;
    private 'operation_definition'?: OperationDefinitionInfo;
    public trigger?: BackupTriggerInfo;
    public constructor() { 
    }
    public withEnabled(enabled: boolean): GetBackupPolicyResponseInfo {
        this['enabled'] = enabled;
        return this;
    }
    public withId(id: string): GetBackupPolicyResponseInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): GetBackupPolicyResponseInfo {
        this['name'] = name;
        return this;
    }
    public withOperationType(operationType: string): GetBackupPolicyResponseInfo {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: string  | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType(): string | undefined {
        return this['operation_type'];
    }
    public withOperationDefinition(operationDefinition: OperationDefinitionInfo): GetBackupPolicyResponseInfo {
        this['operation_definition'] = operationDefinition;
        return this;
    }
    public set operationDefinition(operationDefinition: OperationDefinitionInfo  | undefined) {
        this['operation_definition'] = operationDefinition;
    }
    public get operationDefinition(): OperationDefinitionInfo | undefined {
        return this['operation_definition'];
    }
    public withTrigger(trigger: BackupTriggerInfo): GetBackupPolicyResponseInfo {
        this['trigger'] = trigger;
        return this;
    }
}