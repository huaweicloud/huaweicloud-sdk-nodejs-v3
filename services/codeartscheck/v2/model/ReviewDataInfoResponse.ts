

export class ReviewDataInfoResponse {
    public compareType?: string;
    public isCheck?: number;
    public name?: string;
    public value?: number;
    public constructor() { 
    }
    public withCompareType(compareType: string): ReviewDataInfoResponse {
        this['compareType'] = compareType;
        return this;
    }
    public withIsCheck(isCheck: number): ReviewDataInfoResponse {
        this['isCheck'] = isCheck;
        return this;
    }
    public withName(name: string): ReviewDataInfoResponse {
        this['name'] = name;
        return this;
    }
    public withValue(value: number): ReviewDataInfoResponse {
        this['value'] = value;
        return this;
    }
}