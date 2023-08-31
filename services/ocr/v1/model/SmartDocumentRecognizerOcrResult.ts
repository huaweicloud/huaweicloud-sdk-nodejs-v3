import { SmartDocumentRecognizerWordsBlockList } from './SmartDocumentRecognizerWordsBlockList';


export class SmartDocumentRecognizerOcrResult {
    public direction?: number;
    private 'words_block_count'?: number;
    private 'words_block_list'?: Array<SmartDocumentRecognizerWordsBlockList>;
    public constructor() { 
    }
    public withDirection(direction: number): SmartDocumentRecognizerOcrResult {
        this['direction'] = direction;
        return this;
    }
    public withWordsBlockCount(wordsBlockCount: number): SmartDocumentRecognizerOcrResult {
        this['words_block_count'] = wordsBlockCount;
        return this;
    }
    public set wordsBlockCount(wordsBlockCount: number  | undefined) {
        this['words_block_count'] = wordsBlockCount;
    }
    public get wordsBlockCount(): number | undefined {
        return this['words_block_count'];
    }
    public withWordsBlockList(wordsBlockList: Array<SmartDocumentRecognizerWordsBlockList>): SmartDocumentRecognizerOcrResult {
        this['words_block_list'] = wordsBlockList;
        return this;
    }
    public set wordsBlockList(wordsBlockList: Array<SmartDocumentRecognizerWordsBlockList>  | undefined) {
        this['words_block_list'] = wordsBlockList;
    }
    public get wordsBlockList(): Array<SmartDocumentRecognizerWordsBlockList> | undefined {
        return this['words_block_list'];
    }
}