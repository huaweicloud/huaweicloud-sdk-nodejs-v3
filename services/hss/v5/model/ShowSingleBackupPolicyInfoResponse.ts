import { BackupTriggerInfo } from './BackupTriggerInfo';
import { OperationDefinitionInfo } from './OperationDefinitionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSingleBackupPolicyInfoResponse extends SdkResponse {
    public enabled?: boolean;
    public id?: string;
    public name?: string;
    private 'operation_type'?: string;
    private 'operation_definition'?: OperationDefinitionInfo;
    public trigger?: BackupTriggerInfo;
    public constructor() { 
        super();
    }
    public withEnabled(enabled: boolean): ShowSingleBackupPolicyInfoResponse {
        this['enabled'] = enabled;
        return this;
    }
    public withId(id: string): ShowSingleBackupPolicyInfoResponse {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowSingleBackupPolicyInfoResponse {
        this['name'] = name;
        return this;
    }
    public withOperationType(operationType: string): ShowSingleBackupPolicyInfoResponse {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: string  | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType(): string | undefined {
        return this['operation_type'];
    }
    public withOperationDefinition(operationDefinition: OperationDefinitionInfo): ShowSingleBackupPolicyInfoResponse {
        this['operation_definition'] = operationDefinition;
        return this;
    }
    public set operationDefinition(operationDefinition: OperationDefinitionInfo  | undefined) {
        this['operation_definition'] = operationDefinition;
    }
    public get operationDefinition(): OperationDefinitionInfo | undefined {
        return this['operation_definition'];
    }
    public withTrigger(trigger: BackupTriggerInfo): ShowSingleBackupPolicyInfoResponse {
        this['trigger'] = trigger;
        return this;
    }
}