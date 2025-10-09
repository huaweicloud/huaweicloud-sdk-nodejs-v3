

export class Operation {
    private 'operation_id'?: string;
    private 'operation_action'?: string;
    private 'dependent_actions'?: Array<string>;
    public constructor(operationId?: string, operationAction?: string) { 
        this['operation_id'] = operationId;
        this['operation_action'] = operationAction;
    }
    public withOperationId(operationId: string): Operation {
        this['operation_id'] = operationId;
        return this;
    }
    public set operationId(operationId: string  | undefined) {
        this['operation_id'] = operationId;
    }
    public get operationId(): string | undefined {
        return this['operation_id'];
    }
    public withOperationAction(operationAction: string): Operation {
        this['operation_action'] = operationAction;
        return this;
    }
    public set operationAction(operationAction: string  | undefined) {
        this['operation_action'] = operationAction;
    }
    public get operationAction(): string | undefined {
        return this['operation_action'];
    }
    public withDependentActions(dependentActions: Array<string>): Operation {
        this['dependent_actions'] = dependentActions;
        return this;
    }
    public set dependentActions(dependentActions: Array<string>  | undefined) {
        this['dependent_actions'] = dependentActions;
    }
    public get dependentActions(): Array<string> | undefined {
        return this['dependent_actions'];
    }
}