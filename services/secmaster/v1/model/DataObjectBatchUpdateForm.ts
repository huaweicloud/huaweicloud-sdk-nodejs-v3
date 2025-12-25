

export class DataObjectBatchUpdateForm {
    private 'batch_ids'?: Array<string>;
    private 'trigger_flag'?: boolean;
    private 'data_object'?: object;
    public constructor() { 
    }
    public withBatchIds(batchIds: Array<string>): DataObjectBatchUpdateForm {
        this['batch_ids'] = batchIds;
        return this;
    }
    public set batchIds(batchIds: Array<string>  | undefined) {
        this['batch_ids'] = batchIds;
    }
    public get batchIds(): Array<string> | undefined {
        return this['batch_ids'];
    }
    public withTriggerFlag(triggerFlag: boolean): DataObjectBatchUpdateForm {
        this['trigger_flag'] = triggerFlag;
        return this;
    }
    public set triggerFlag(triggerFlag: boolean  | undefined) {
        this['trigger_flag'] = triggerFlag;
    }
    public get triggerFlag(): boolean | undefined {
        return this['trigger_flag'];
    }
    public withDataObject(dataObject: object): DataObjectBatchUpdateForm {
        this['data_object'] = dataObject;
        return this;
    }
    public set dataObject(dataObject: object  | undefined) {
        this['data_object'] = dataObject;
    }
    public get dataObject(): object | undefined {
        return this['data_object'];
    }
}