

export class UpdateFunctionMaxInstanceConfigRequestBody {
    private 'max_instance_num'?: number | undefined;
    public constructor() { 
    }
    public withMaxInstanceNum(maxInstanceNum: number): UpdateFunctionMaxInstanceConfigRequestBody {
        this['max_instance_num'] = maxInstanceNum;
        return this;
    }
    public set maxInstanceNum(maxInstanceNum: number | undefined) {
        this['max_instance_num'] = maxInstanceNum;
    }
    public get maxInstanceNum() {
        return this['max_instance_num'];
    }
}