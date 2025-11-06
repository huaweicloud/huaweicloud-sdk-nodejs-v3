

export class LineContentDto {
    public lineNO?: number;
    public content?: string;
    public constructor() { 
    }
    public withLineNO(lineNO: number): LineContentDto {
        this['lineNO'] = lineNO;
        return this;
    }
    public withContent(content: string): LineContentDto {
        this['content'] = content;
        return this;
    }
}