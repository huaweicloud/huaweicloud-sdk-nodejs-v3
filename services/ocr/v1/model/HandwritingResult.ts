import { HandwritingWordsBlockList } from './HandwritingWordsBlockList';


export class HandwritingResult {
    private 'words_block_count'?: number;
    private 'words_block_list'?: Array<HandwritingWordsBlockList>;
    public constructor(wordsBlockCount?: number, wordsBlockList?: Array<HandwritingWordsBlockList>) { 
        this['words_block_count'] = wordsBlockCount;
        this['words_block_list'] = wordsBlockList;
    }
    public withWordsBlockCount(wordsBlockCount: number): HandwritingResult {
        this['words_block_count'] = wordsBlockCount;
        return this;
    }
    public set wordsBlockCount(wordsBlockCount: number  | undefined) {
        this['words_block_count'] = wordsBlockCount;
    }
    public get wordsBlockCount(): number | undefined {
        return this['words_block_count'];
    }
    public withWordsBlockList(wordsBlockList: Array<HandwritingWordsBlockList>): HandwritingResult {
        this['words_block_list'] = wordsBlockList;
        return this;
    }
    public set wordsBlockList(wordsBlockList: Array<HandwritingWordsBlockList>  | undefined) {
        this['words_block_list'] = wordsBlockList;
    }
    public get wordsBlockList(): Array<HandwritingWordsBlockList> | undefined {
        return this['words_block_list'];
    }
}