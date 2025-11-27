import { OperationPreferences } from './OperationPreferences';


export class OperationPreferencesTypeHolder {
    private 'operation_preferences'?: OperationPreferences;
    public constructor() { 
    }
    public withOperationPreferences(operationPreferences: OperationPreferences): OperationPreferencesTypeHolder {
        this['operation_preferences'] = operationPreferences;
        return this;
    }
    public set operationPreferences(operationPreferences: OperationPreferences  | undefined) {
        this['operation_preferences'] = operationPreferences;
    }
    public get operationPreferences(): OperationPreferences | undefined {
        return this['operation_preferences'];
    }
}