import { FinancialStatementResultImageSize } from './FinancialStatementResultImageSize';
import { FinancialStatementWordsRegionList } from './FinancialStatementWordsRegionList';


export class FinancialStatementResult {
    private 'words_region_count'?: number;
    private 'words_region_list'?: Array<FinancialStatementWordsRegionList>;
    public excel?: string;
    private 'image_size'?: FinancialStatementResultImageSize;
    private 'rectification_matrix'?: Array<Array<number>>;
    public constructor(wordsRegionCount?: number, wordsRegionList?: Array<FinancialStatementWordsRegionList>) { 
        this['words_region_count'] = wordsRegionCount;
        this['words_region_list'] = wordsRegionList;
    }
    public withWordsRegionCount(wordsRegionCount: number): FinancialStatementResult {
        this['words_region_count'] = wordsRegionCount;
        return this;
    }
    public set wordsRegionCount(wordsRegionCount: number  | undefined) {
        this['words_region_count'] = wordsRegionCount;
    }
    public get wordsRegionCount(): number | undefined {
        return this['words_region_count'];
    }
    public withWordsRegionList(wordsRegionList: Array<FinancialStatementWordsRegionList>): FinancialStatementResult {
        this['words_region_list'] = wordsRegionList;
        return this;
    }
    public set wordsRegionList(wordsRegionList: Array<FinancialStatementWordsRegionList>  | undefined) {
        this['words_region_list'] = wordsRegionList;
    }
    public get wordsRegionList(): Array<FinancialStatementWordsRegionList> | undefined {
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
    public set imageSize(imageSize: FinancialStatementResultImageSize  | undefined) {
        this['image_size'] = imageSize;
    }
    public get imageSize(): FinancialStatementResultImageSize | undefined {
        return this['image_size'];
    }
    public withRectificationMatrix(rectificationMatrix: Array<Array<number>>): FinancialStatementResult {
        this['rectification_matrix'] = rectificationMatrix;
        return this;
    }
    public set rectificationMatrix(rectificationMatrix: Array<Array<number>>  | undefined) {
        this['rectification_matrix'] = rectificationMatrix;
    }
    public get rectificationMatrix(): Array<Array<number>> | undefined {
        return this['rectification_matrix'];
    }
}