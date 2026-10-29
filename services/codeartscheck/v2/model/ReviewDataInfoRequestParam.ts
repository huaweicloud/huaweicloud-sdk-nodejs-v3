

export class ReviewDataInfoRequestParam {
    public compareType?: string;
    public isCheck?: number;
    public name?: string;
    public value?: number;
    public constructor(compareType?: string, isCheck?: number, name?: string, value?: number) { 
        this['compareType'] = compareType;
        this['isCheck'] = isCheck;
        this['name'] = name;
        this['value'] = value;
    }
    public withCompareType(compareType: string): ReviewDataInfoRequestParam {
        this['compareType'] = compareType;
        return this;
    }
    public withIsCheck(isCheck: number): ReviewDataInfoRequestParam {
        this['isCheck'] = isCheck;
        return this;
    }
    public withName(name: string): ReviewDataInfoRequestParam {
        this['name'] = name;
        return this;
    }
    public withValue(value: number): ReviewDataInfoRequestParam {
        this['value'] = value;
        return this;
    }
}