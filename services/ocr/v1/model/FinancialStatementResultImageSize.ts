

export class FinancialStatementResultImageSize {
    public height?: number;
    public width?: number;
    public constructor() { 
    }
    public withHeight(height: number): FinancialStatementResultImageSize {
        this['height'] = height;
        return this;
    }
    public withWidth(width: number): FinancialStatementResultImageSize {
        this['width'] = width;
        return this;
    }
}