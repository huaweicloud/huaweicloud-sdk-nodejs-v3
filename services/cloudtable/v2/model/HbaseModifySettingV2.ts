

export class HbaseModifySettingV2 {
    private 'parm_name': string | undefined;
    private 'new_value': string | undefined;
    public id?: string;
    public constructor(parmName?: any, newValue?: any) { 
        this['parm_name'] = parmName;
        this['new_value'] = newValue;
    }
    public withParmName(parmName: string): HbaseModifySettingV2 {
        this['parm_name'] = parmName;
        return this;
    }
    public set parmName(parmName: string | undefined) {
        this['parm_name'] = parmName;
    }
    public get parmName() {
        return this['parm_name'];
    }
    public withNewValue(newValue: string): HbaseModifySettingV2 {
        this['new_value'] = newValue;
        return this;
    }
    public set newValue(newValue: string | undefined) {
        this['new_value'] = newValue;
    }
    public get newValue() {
        return this['new_value'];
    }
    public withId(id: string): HbaseModifySettingV2 {
        this['id'] = id;
        return this;
    }
}