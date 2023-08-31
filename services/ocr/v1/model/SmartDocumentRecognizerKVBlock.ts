import { SmartDocumentRecognizerKVWordsBlock } from './SmartDocumentRecognizerKVWordsBlock';


export class SmartDocumentRecognizerKVBlock {
    public key?: string;
    public value?: string;
    private 'words_block_count'?: number;
    private 'words_block_list'?: Array<SmartDocumentRecognizerKVWordsBlock>;
    public constructor() { 
    }
    public withKey(key: string): SmartDocumentRecognizerKVBlock {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): SmartDocumentRecognizerKVBlock {
        this['value'] = value;
        return this;
    }
    public withWordsBlockCount(wordsBlockCount: number): SmartDocumentRecognizerKVBlock {
        this['words_block_count'] = wordsBlockCount;
        return this;
    }
    public set wordsBlockCount(wordsBlockCount: number  | undefined) {
        this['words_block_count'] = wordsBlockCount;
    }
    public get wordsBlockCount(): number | undefined {
        return this['words_block_count'];
    }
    public withWordsBlockList(wordsBlockList: Array<SmartDocumentRecognizerKVWordsBlock>): SmartDocumentRecognizerKVBlock {
        this['words_block_list'] = wordsBlockList;
        return this;
    }
    public set wordsBlockList(wordsBlockList: Array<SmartDocumentRecognizerKVWordsBlock>  | undefined) {
        this['words_block_list'] = wordsBlockList;
    }
    public get wordsBlockList(): Array<SmartDocumentRecognizerKVWordsBlock> | undefined {
        return this['words_block_list'];
    }
}