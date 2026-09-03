

export class RowPairDto {
    private 'before_row'?: object;
    private 'after_row'?: object;
    public constructor() { 
    }
    public withBeforeRow(beforeRow: object): RowPairDto {
        this['before_row'] = beforeRow;
        return this;
    }
    public set beforeRow(beforeRow: object  | undefined) {
        this['before_row'] = beforeRow;
    }
    public get beforeRow(): object | undefined {
        return this['before_row'];
    }
    public withAfterRow(afterRow: object): RowPairDto {
        this['after_row'] = afterRow;
        return this;
    }
    public set afterRow(afterRow: object  | undefined) {
        this['after_row'] = afterRow;
    }
    public get afterRow(): object | undefined {
        return this['after_row'];
    }
}