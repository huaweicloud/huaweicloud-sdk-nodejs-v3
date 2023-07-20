

export class UpdateFunctionMaxInstanceConfigRequestBody {
    private 'max_instance_num'?: number;
    public constructor() { 
    }
    public withMaxInstanceNum(maxInstanceNum: number): UpdateFunctionMaxInstanceConfigRequestBody {
        this['max_instance_num'] = maxInstanceNum;
        return this;
    }
    public set maxInstanceNum(maxInstanceNum: number  | undefined) {
        this['max_instance_num'] = maxInstanceNum;
    }
    public get maxInstanceNum(): number | undefined {
        return this['max_instance_num'];
    }
}