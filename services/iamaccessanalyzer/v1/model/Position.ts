

export class Position {
    public line?: number;
    public column?: number;
    public offset?: number;
    public constructor(line?: number, column?: number, offset?: number) { 
        this['line'] = line;
        this['column'] = column;
        this['offset'] = offset;
    }
    public withLine(line: number): Position {
        this['line'] = line;
        return this;
    }
    public withColumn(column: number): Position {
        this['column'] = column;
        return this;
    }
    public withOffset(offset: number): Position {
        this['offset'] = offset;
        return this;
    }
}