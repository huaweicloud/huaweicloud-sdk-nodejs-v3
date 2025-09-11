

export class ModifyHbaConfRequestBody {
    private 'before_confs'?: object;
    private 'after_confs'?: object;
    public constructor(beforeConfs?: object, afterConfs?: object) { 
        this['before_confs'] = beforeConfs;
        this['after_confs'] = afterConfs;
    }
    public withBeforeConfs(beforeConfs: object): ModifyHbaConfRequestBody {
        this['before_confs'] = beforeConfs;
        return this;
    }
    public set beforeConfs(beforeConfs: object  | undefined) {
        this['before_confs'] = beforeConfs;
    }
    public get beforeConfs(): object | undefined {
        return this['before_confs'];
    }
    public withAfterConfs(afterConfs: object): ModifyHbaConfRequestBody {
        this['after_confs'] = afterConfs;
        return this;
    }
    public set afterConfs(afterConfs: object  | undefined) {
        this['after_confs'] = afterConfs;
    }
    public get afterConfs(): object | undefined {
        return this['after_confs'];
    }
}