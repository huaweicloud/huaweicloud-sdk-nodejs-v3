import { Columns } from './Columns';


export class ExtractedDatabaseWatermark {
    private 'watermark_key'?: string;
    public columns?: Array<Columns>;
    public data?: Array<{ [key: string]: object; }>;
    public constructor(watermarkKey?: string, columns?: Array<Columns>, data?: Array<{ [key: string]: object; }>) { 
        this['watermark_key'] = watermarkKey;
        this['columns'] = columns;
        this['data'] = data;
    }
    public withWatermarkKey(watermarkKey: string): ExtractedDatabaseWatermark {
        this['watermark_key'] = watermarkKey;
        return this;
    }
    public set watermarkKey(watermarkKey: string  | undefined) {
        this['watermark_key'] = watermarkKey;
    }
    public get watermarkKey(): string | undefined {
        return this['watermark_key'];
    }
    public withColumns(columns: Array<Columns>): ExtractedDatabaseWatermark {
        this['columns'] = columns;
        return this;
    }
    public withData(data: Array<{ [key: string]: object; }>): ExtractedDatabaseWatermark {
        this['data'] = data;
        return this;
    }
}