

export class JobScriptOrderOperationBody {
    private 'batch_index'?: number;
    private 'instance_id'?: number;
    private 'operation_type'?: JobScriptOrderOperationBodyOperationTypeEnum | string;
    public constructor(operationType?: string) { 
        this['operation_type'] = operationType;
    }
    public withBatchIndex(batchIndex: number): JobScriptOrderOperationBody {
        this['batch_index'] = batchIndex;
        return this;
    }
    public set batchIndex(batchIndex: number  | undefined) {
        this['batch_index'] = batchIndex;
    }
    public get batchIndex(): number | undefined {
        return this['batch_index'];
    }
    public withInstanceId(instanceId: number): JobScriptOrderOperationBody {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: number  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): number | undefined {
        return this['instance_id'];
    }
    public withOperationType(operationType: JobScriptOrderOperationBodyOperationTypeEnum | string): JobScriptOrderOperationBody {
        this['operation_type'] = operationType;
        return this;
    }
    public set operationType(operationType: JobScriptOrderOperationBodyOperationTypeEnum | string  | undefined) {
        this['operation_type'] = operationType;
    }
    public get operationType(): JobScriptOrderOperationBodyOperationTypeEnum | string | undefined {
        return this['operation_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum JobScriptOrderOperationBodyOperationTypeEnum {
    CANCEL_INSTANCE = 'CANCEL_INSTANCE',
    SKIP_BATCH = 'SKIP_BATCH',
    CANCEL_ORDER = 'CANCEL_ORDER',
    PAUSE_ORDER = 'PAUSE_ORDER',
    CONTINUE_ORDER = 'CONTINUE_ORDER'
}
