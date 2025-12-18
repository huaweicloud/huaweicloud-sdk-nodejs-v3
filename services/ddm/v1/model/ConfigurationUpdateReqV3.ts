

export class ConfigurationUpdateReqV3 {
    private 'update_para'?: object;
    public constructor() { 
    }
    public withUpdatePara(updatePara: object): ConfigurationUpdateReqV3 {
        this['update_para'] = updatePara;
        return this;
    }
    public set updatePara(updatePara: object  | undefined) {
        this['update_para'] = updatePara;
    }
    public get updatePara(): object | undefined {
        return this['update_para'];
    }
}