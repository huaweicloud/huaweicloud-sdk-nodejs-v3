import { SmartDocumentRecognizerTableWordsBlock } from './SmartDocumentRecognizerTableWordsBlock';


export class SmartDocumentRecognizerTableBlock {
    public location?: Array<Array<number>>;
    private 'words_block_count'?: number;
    private 'words_block_list'?: Array<SmartDocumentRecognizerTableWordsBlock>;
    public excel?: string;
    public constructor() { 
    }
    public withLocation(location: Array<Array<number>>): SmartDocumentRecognizerTableBlock {
        this['location'] = location;
        return this;
    }
    public withWordsBlockCount(wordsBlockCount: number): SmartDocumentRecognizerTableBlock {
        this['words_block_count'] = wordsBlockCount;
        return this;
    }
    public set wordsBlockCount(wordsBlockCount: number  | undefined) {
        this['words_block_count'] = wordsBlockCount;
    }
    public get wordsBlockCount(): number | undefined {
        return this['words_block_count'];
    }
    public withWordsBlockList(wordsBlockList: Array<SmartDocumentRecognizerTableWordsBlock>): SmartDocumentRecognizerTableBlock {
        this['words_block_list'] = wordsBlockList;
        return this;
    }
    public set wordsBlockList(wordsBlockList: Array<SmartDocumentRecognizerTableWordsBlock>  | undefined) {
        this['words_block_list'] = wordsBlockList;
    }
    public get wordsBlockList(): Array<SmartDocumentRecognizerTableWordsBlock> | undefined {
        return this['words_block_list'];
    }
    public withExcel(excel: string): SmartDocumentRecognizerTableBlock {
        this['excel'] = excel;
        return this;
    }
}