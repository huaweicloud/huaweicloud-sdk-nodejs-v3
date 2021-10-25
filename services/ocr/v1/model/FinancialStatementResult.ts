import { FinancialStatementResultImageSize } from './FinancialStatementResultImageSize';
import { FinancialStatementWordsRegionList } from './FinancialStatementWordsRegionList';


export class FinancialStatementResult {
    private 'words_region_count': number | undefined;
    private 'words_region_list': Array<FinancialStatementWordsRegionList> | undefined;
    public excel?: string;
    private 'image_size'?: FinancialStatementResultImageSize | undefined;
    public constructor(wordsRegionCount?: any, wordsRegionList?: any) { 
        this['words_region_count'] = wordsRegionCount;
        this['words_region_list'] = wordsRegionList;
    }
    public withWordsRegionCount(wordsRegionCount: number): FinancialStatementResult {
        this['words_region_count'] = wordsRegionCount;
        return this;
    }
    public set wordsRegionCount(wordsRegionCount: number | undefined) {
        this['words_region_count'] = wordsRegionCount;
    }
    public get wordsRegionCount() {
        return this['words_region_count'];
    }
    public withWordsRegionList(wordsRegionList: Array<FinancialStatementWordsRegionList>): FinancialStatementResult {
        this['words_region_list'] = wordsRegionList;
        return this;
    }
    public set wordsRegionList(wordsRegionList: Array<FinancialStatementWordsRegionList> | undefined) {
        this['words_region_list'] = wordsRegionList;
    }
    public get wordsRegionList() {
        return this['words_region_list'];
    }
    public withExcel(excel: string): FinancialStatementResult {
        this['excel'] = excel;
        return this;
    }
    public withImageSize(imageSize: FinancialStatementResultImageSize): FinancialStatementResult {
        this['image_size'] = imageSize;
        return this;
    }
    public set imageSize(imageSize: FinancialStatementResultImageSize | undefined) {
        this['image_size'] = imageSize;
    }
    public get imageSize() {
        return this['image_size'];
    }
}