import { Columns } from './Columns';


export class EmbeddedDatabaseWatermark {
    private 'watermark_content'?: string;
    private 'watermark_key'?: string;
    public columns?: Array<Columns>;
    public data?: Array<{ [key: string]: object; }>;
    public constructor(watermarkContent?: string, watermarkKey?: string, columns?: Array<Columns>, data?: Array<{ [key: string]: object; }>) { 
        this['watermark_content'] = watermarkContent;
        this['watermark_key'] = watermarkKey;
        this['columns'] = columns;
        this['data'] = data;
    }
    public withWatermarkContent(watermarkContent: string): EmbeddedDatabaseWatermark {
        this['watermark_content'] = watermarkContent;
        return this;
    }
    public set watermarkContent(watermarkContent: string  | undefined) {
        this['watermark_content'] = watermarkContent;
    }
    public get watermarkContent(): string | undefined {
        return this['watermark_content'];
    }
    public withWatermarkKey(watermarkKey: string): EmbeddedDatabaseWatermark {
        this['watermark_key'] = watermarkKey;
        return this;
    }
    public set watermarkKey(watermarkKey: string  | undefined) {
        this['watermark_key'] = watermarkKey;
    }
    public get watermarkKey(): string | undefined {
        return this['watermark_key'];
    }
    public withColumns(columns: Array<Columns>): EmbeddedDatabaseWatermark {
        this['columns'] = columns;
        return this;
    }
    public withData(data: Array<{ [key: string]: object; }>): EmbeddedDatabaseWatermark {
        this['data'] = data;
        return this;
    }
}