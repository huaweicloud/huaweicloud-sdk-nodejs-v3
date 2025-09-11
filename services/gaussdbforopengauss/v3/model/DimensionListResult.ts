

export class DimensionListResult {
    public name?: string;
    private 'active_num'?: string;
    private 'total_num'?: string;
    public constructor() { 
    }
    public withName(name: string): DimensionListResult {
        this['name'] = name;
        return this;
    }
    public withActiveNum(activeNum: string): DimensionListResult {
        this['active_num'] = activeNum;
        return this;
    }
    public set activeNum(activeNum: string  | undefined) {
        this['active_num'] = activeNum;
    }
    public get activeNum(): string | undefined {
        return this['active_num'];
    }
    public withTotalNum(totalNum: string): DimensionListResult {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: string  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): string | undefined {
        return this['total_num'];
    }
}