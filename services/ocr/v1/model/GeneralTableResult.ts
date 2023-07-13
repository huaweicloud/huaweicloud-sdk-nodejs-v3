import { WordsRegionList } from './WordsRegionList';


export class GeneralTableResult {
    private 'words_region_count': number | undefined;
    private 'words_region_list': Array<WordsRegionList> | undefined;
    public excel?: string;
    public constructor(wordsRegionCount?: any, wordsRegionList?: any) { 
        this['words_region_count'] = wordsRegionCount;
        this['words_region_list'] = wordsRegionList;
    }
    public withWordsRegionCount(wordsRegionCount: number): GeneralTableResult {
        this['words_region_count'] = wordsRegionCount;
        return this;
    }
    public set wordsRegionCount(wordsRegionCount: number | undefined) {
        this['words_region_count'] = wordsRegionCount;
    }
    public get wordsRegionCount() {
        return this['words_region_count'];
    }
    public withWordsRegionList(wordsRegionList: Array<WordsRegionList>): GeneralTableResult {
        this['words_region_list'] = wordsRegionList;
        return this;
    }
    public set wordsRegionList(wordsRegionList: Array<WordsRegionList> | undefined) {
        this['words_region_list'] = wordsRegionList;
    }
    public get wordsRegionList() {
        return this['words_region_list'];
    }
    public withExcel(excel: string): GeneralTableResult {
        this['excel'] = excel;
        return this;
    }
}