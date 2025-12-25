

export class DataObjectCreateForm {
    public id?: string;
    private 'format_version'?: number;
    public name?: string;
    public type?: string;
    private 'trigger_flag'?: boolean;
    private 'data_object'?: object;
    public constructor() { 
    }
    public withId(id: string): DataObjectCreateForm {
        this['id'] = id;
        return this;
    }
    public withFormatVersion(formatVersion: number): DataObjectCreateForm {
        this['format_version'] = formatVersion;
        return this;
    }
    public set formatVersion(formatVersion: number  | undefined) {
        this['format_version'] = formatVersion;
    }
    public get formatVersion(): number | undefined {
        return this['format_version'];
    }
    public withName(name: string): DataObjectCreateForm {
        this['name'] = name;
        return this;
    }
    public withType(type: string): DataObjectCreateForm {
        this['type'] = type;
        return this;
    }
    public withTriggerFlag(triggerFlag: boolean): DataObjectCreateForm {
        this['trigger_flag'] = triggerFlag;
        return this;
    }
    public set triggerFlag(triggerFlag: boolean  | undefined) {
        this['trigger_flag'] = triggerFlag;
    }
    public get triggerFlag(): boolean | undefined {
        return this['trigger_flag'];
    }
    public withDataObject(dataObject: object): DataObjectCreateForm {
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