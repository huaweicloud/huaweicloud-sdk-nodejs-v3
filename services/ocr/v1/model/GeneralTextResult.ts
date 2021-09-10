import { GeneralTextWordsBlockList } from './GeneralTextWordsBlockList';


export class GeneralTextResult {
    public direction: number;
    private 'words_block_count': number | undefined;
    private 'words_block_list': Array<GeneralTextWordsBlockList> | undefined;
    public constructor(direction?: any, wordsBlockCount?: any, wordsBlockList?: any) { 
        this['direction'] = direction;
        this['words_block_count'] = wordsBlockCount;
        this['words_block_list'] = wordsBlockList;
    }
    public withDirection(direction: number): GeneralTextResult {
        this['direction'] = direction;
        return this;
    }
    public withWordsBlockCount(wordsBlockCount: number): GeneralTextResult {
        this['words_block_count'] = wordsBlockCount;
        return this;
    }
    public set wordsBlockCount(wordsBlockCount: number | undefined) {
        this['words_block_count'] = wordsBlockCount;
    }
    public get wordsBlockCount() {
        return this['words_block_count'];
    }
    public withWordsBlockList(wordsBlockList: Array<GeneralTextWordsBlockList>): GeneralTextResult {
        this['words_block_list'] = wordsBlockList;
        return this;
    }
    public set wordsBlockList(wordsBlockList: Array<GeneralTextWordsBlockList> | undefined) {
        this['words_block_list'] = wordsBlockList;
    }
    public get wordsBlockList() {
        return this['words_block_list'];
    }
}