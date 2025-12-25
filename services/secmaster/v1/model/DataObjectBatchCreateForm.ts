

export class DataObjectBatchCreateForm {
    public id?: string;
    private 'format_version'?: number;
    public name?: string;
    public type?: string;
    private 'trigger_flag'?: boolean;
    private 'data_object_list'?: Array<object>;
    public constructor() { 
    }
    public withId(id: string): DataObjectBatchCreateForm {
        this['id'] = id;
        return this;
    }
    public withFormatVersion(formatVersion: number): DataObjectBatchCreateForm {
        this['format_version'] = formatVersion;
        return this;
    }
    public set formatVersion(formatVersion: number  | undefined) {
        this['format_version'] = formatVersion;
    }
    public get formatVersion(): number | undefined {
        return this['format_version'];
    }
    public withName(name: string): DataObjectBatchCreateForm {
        this['name'] = name;
        return this;
    }
    public withType(type: string): DataObjectBatchCreateForm {
        this['type'] = type;
        return this;
    }
    public withTriggerFlag(triggerFlag: boolean): DataObjectBatchCreateForm {
        this['trigger_flag'] = triggerFlag;
        return this;
    }
    public set triggerFlag(triggerFlag: boolean  | undefined) {
        this['trigger_flag'] = triggerFlag;
    }
    public get triggerFlag(): boolean | undefined {
        return this['trigger_flag'];
    }
    public withDataObjectList(dataObjectList: Array<object>): DataObjectBatchCreateForm {
        this['data_object_list'] = dataObjectList;
        return this;
    }
    public set dataObjectList(dataObjectList: Array<object>  | undefined) {
        this['data_object_list'] = dataObjectList;
    }
    public get dataObjectList(): Array<object> | undefined {
        return this['data_object_list'];
    }
}