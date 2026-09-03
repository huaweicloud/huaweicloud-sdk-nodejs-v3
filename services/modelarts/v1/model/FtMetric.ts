

export class FtMetric {
    private 'name_cn'?: string;
    private 'name_en'?: string;
    private 'des_en'?: string;
    private 'des_cn'?: string;
    public type?: string;
    public group?: string;
    private 'group_by'?: Array<string>;
    private 'x_axis'?: string;
    public tags?: Array<string>;
    public unit?: string;
    public data?: object;
    public constructor(nameCn?: string, nameEn?: string, desEn?: string, desCn?: string, data?: object) { 
        this['name_cn'] = nameCn;
        this['name_en'] = nameEn;
        this['des_en'] = desEn;
        this['des_cn'] = desCn;
        this['data'] = data;
    }
    public withNameCn(nameCn: string): FtMetric {
        this['name_cn'] = nameCn;
        return this;
    }
    public set nameCn(nameCn: string  | undefined) {
        this['name_cn'] = nameCn;
    }
    public get nameCn(): string | undefined {
        return this['name_cn'];
    }
    public withNameEn(nameEn: string): FtMetric {
        this['name_en'] = nameEn;
        return this;
    }
    public set nameEn(nameEn: string  | undefined) {
        this['name_en'] = nameEn;
    }
    public get nameEn(): string | undefined {
        return this['name_en'];
    }
    public withDesEn(desEn: string): FtMetric {
        this['des_en'] = desEn;
        return this;
    }
    public set desEn(desEn: string  | undefined) {
        this['des_en'] = desEn;
    }
    public get desEn(): string | undefined {
        return this['des_en'];
    }
    public withDesCn(desCn: string): FtMetric {
        this['des_cn'] = desCn;
        return this;
    }
    public set desCn(desCn: string  | undefined) {
        this['des_cn'] = desCn;
    }
    public get desCn(): string | undefined {
        return this['des_cn'];
    }
    public withType(type: string): FtMetric {
        this['type'] = type;
        return this;
    }
    public withGroup(group: string): FtMetric {
        this['group'] = group;
        return this;
    }
    public withGroupBy(groupBy: Array<string>): FtMetric {
        this['group_by'] = groupBy;
        return this;
    }
    public set groupBy(groupBy: Array<string>  | undefined) {
        this['group_by'] = groupBy;
    }
    public get groupBy(): Array<string> | undefined {
        return this['group_by'];
    }
    public withXAxis(xAxis: string): FtMetric {
        this['x_axis'] = xAxis;
        return this;
    }
    public set xAxis(xAxis: string  | undefined) {
        this['x_axis'] = xAxis;
    }
    public get xAxis(): string | undefined {
        return this['x_axis'];
    }
    public withTags(tags: Array<string>): FtMetric {
        this['tags'] = tags;
        return this;
    }
    public withUnit(unit: string): FtMetric {
        this['unit'] = unit;
        return this;
    }
    public withData(data: object): FtMetric {
        this['data'] = data;
        return this;
    }
}