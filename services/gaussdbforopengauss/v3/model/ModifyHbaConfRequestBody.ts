

export class ModifyHbaConfRequestBody {
    private 'before_conf'?: object;
    private 'after_conf'?: object;
    public constructor(beforeConf?: object, afterConf?: object) { 
        this['before_conf'] = beforeConf;
        this['after_conf'] = afterConf;
    }
    public withBeforeConf(beforeConf: object): ModifyHbaConfRequestBody {
        this['before_conf'] = beforeConf;
        return this;
    }
    public set beforeConf(beforeConf: object  | undefined) {
        this['before_conf'] = beforeConf;
    }
    public get beforeConf(): object | undefined {
        return this['before_conf'];
    }
    public withAfterConf(afterConf: object): ModifyHbaConfRequestBody {
        this['after_conf'] = afterConf;
        return this;
    }
    public set afterConf(afterConf: object  | undefined) {
        this['after_conf'] = afterConf;
    }
    public get afterConf(): object | undefined {
        return this['after_conf'];
    }
}