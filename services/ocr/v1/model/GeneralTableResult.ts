import { WordsRegionList } from './WordsRegionList';


export class GeneralTableResult {
    private 'words_region_count'?: number;
    private 'words_region_list'?: Array<WordsRegionList>;
    public excel?: string;
    public constructor(wordsRegionCount?: number, wordsRegionList?: Array<WordsRegionList>) { 
        this['words_region_count'] = wordsRegionCount;
        this['words_region_list'] = wordsRegionList;
    }
    public withWordsRegionCount(wordsRegionCount: number): GeneralTableResult {
        this['words_region_count'] = wordsRegionCount;
        return this;
    }
    public set wordsRegionCount(wordsRegionCount: number  | undefined) {
        this['words_region_count'] = wordsRegionCount;
    }
    public get wordsRegionCount(): number | undefined {
        return this['words_region_count'];
    }
    public withWordsRegionList(wordsRegionList: Array<WordsRegionList>): GeneralTableResult {
        this['words_region_list'] = wordsRegionList;
        return this;
    }
    public set wordsRegionList(wordsRegionList: Array<WordsRegionList>  | undefined) {
        this['words_region_list'] = wordsRegionList;
    }
    public get wordsRegionList(): Array<WordsRegionList> | undefined {
        return this['words_region_list'];
    }
    public withExcel(excel: string): GeneralTableResult {
        this['excel'] = excel;
        return this;
    }
}