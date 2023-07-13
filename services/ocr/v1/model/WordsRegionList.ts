import { GeneralTableWordsBlockList } from './GeneralTableWordsBlockList';


export class WordsRegionList {
    public type: string;
    private 'words_block_count': number | undefined;
    private 'words_block_list': Array<GeneralTableWordsBlockList> | undefined;
    public constructor(type?: any, wordsBlockCount?: any, wordsBlockList?: any) { 
        this['type'] = type;
        this['words_block_count'] = wordsBlockCount;
        this['words_block_list'] = wordsBlockList;
    }
    public withType(type: string): WordsRegionList {
        this['type'] = type;
        return this;
    }
    public withWordsBlockCount(wordsBlockCount: number): WordsRegionList {
        this['words_block_count'] = wordsBlockCount;
        return this;
    }
    public set wordsBlockCount(wordsBlockCount: number | undefined) {
        this['words_block_count'] = wordsBlockCount;
    }
    public get wordsBlockCount() {
        return this['words_block_count'];
    }
    public withWordsBlockList(wordsBlockList: Array<GeneralTableWordsBlockList>): WordsRegionList {
        this['words_block_list'] = wordsBlockList;
        return this;
    }
    public set wordsBlockList(wordsBlockList: Array<GeneralTableWordsBlockList> | undefined) {
        this['words_block_list'] = wordsBlockList;
    }
    public get wordsBlockList() {
        return this['words_block_list'];
    }
}