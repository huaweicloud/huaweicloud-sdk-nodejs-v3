import { SmartDocumentRecognizerTableBlock } from './SmartDocumentRecognizerTableBlock';


export class SmartDocumentRecognizerTableResult {
    private 'table_count'?: number;
    private 'table_list'?: Array<SmartDocumentRecognizerTableBlock>;
    public constructor() { 
    }
    public withTableCount(tableCount: number): SmartDocumentRecognizerTableResult {
        this['table_count'] = tableCount;
        return this;
    }
    public set tableCount(tableCount: number  | undefined) {
        this['table_count'] = tableCount;
    }
    public get tableCount(): number | undefined {
        return this['table_count'];
    }
    public withTableList(tableList: Array<SmartDocumentRecognizerTableBlock>): SmartDocumentRecognizerTableResult {
        this['table_list'] = tableList;
        return this;
    }
    public set tableList(tableList: Array<SmartDocumentRecognizerTableBlock>  | undefined) {
        this['table_list'] = tableList;
    }
    public get tableList(): Array<SmartDocumentRecognizerTableBlock> | undefined {
        return this['table_list'];
    }
}