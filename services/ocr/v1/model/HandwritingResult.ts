import { ExtractedData } from './ExtractedData';
import { HandwritingWordsBlockList } from './HandwritingWordsBlockList';


export class HandwritingResult {
    private 'words_block_count': number | undefined;
    private 'words_block_list': Array<HandwritingWordsBlockList> | undefined;
    private 'extracted_data'?: ExtractedData | undefined;
    public constructor(wordsBlockCount?: any, wordsBlockList?: any) { 
        this['words_block_count'] = wordsBlockCount;
        this['words_block_list'] = wordsBlockList;
    }
    public withWordsBlockCount(wordsBlockCount: number): HandwritingResult {
        this['words_block_count'] = wordsBlockCount;
        return this;
    }
    public set wordsBlockCount(wordsBlockCount: number | undefined) {
        this['words_block_count'] = wordsBlockCount;
    }
    public get wordsBlockCount() {
        return this['words_block_count'];
    }
    public withWordsBlockList(wordsBlockList: Array<HandwritingWordsBlockList>): HandwritingResult {
        this['words_block_list'] = wordsBlockList;
        return this;
    }
    public set wordsBlockList(wordsBlockList: Array<HandwritingWordsBlockList> | undefined) {
        this['words_block_list'] = wordsBlockList;
    }
    public get wordsBlockList() {
        return this['words_block_list'];
    }
    public withExtractedData(extractedData: ExtractedData): HandwritingResult {
        this['extracted_data'] = extractedData;
        return this;
    }
    public set extractedData(extractedData: ExtractedData | undefined) {
        this['extracted_data'] = extractedData;
    }
    public get extractedData() {
        return this['extracted_data'];
    }
}