import { FinancialStatementWordsBlockList } from './FinancialStatementWordsBlockList';


export class FinancialStatementWordsRegionList {
    public type?: string;
    private 'words_block_count'?: number;
    private 'table_location'?: Array<Array<number>>;
    private 'words_block_list'?: Array<FinancialStatementWordsBlockList>;
    public constructor() { 
    }
    public withType(type: string): FinancialStatementWordsRegionList {
        this['type'] = type;
        return this;
    }
    public withWordsBlockCount(wordsBlockCount: number): FinancialStatementWordsRegionList {
        this['words_block_count'] = wordsBlockCount;
        return this;
    }
    public set wordsBlockCount(wordsBlockCount: number  | undefined) {
        this['words_block_count'] = wordsBlockCount;
    }
    public get wordsBlockCount(): number | undefined {
        return this['words_block_count'];
    }
    public withTableLocation(tableLocation: Array<Array<number>>): FinancialStatementWordsRegionList {
        this['table_location'] = tableLocation;
        return this;
    }
    public set tableLocation(tableLocation: Array<Array<number>>  | undefined) {
        this['table_location'] = tableLocation;
    }
    public get tableLocation(): Array<Array<number>> | undefined {
        return this['table_location'];
    }
    public withWordsBlockList(wordsBlockList: Array<FinancialStatementWordsBlockList>): FinancialStatementWordsRegionList {
        this['words_block_list'] = wordsBlockList;
        return this;
    }
    public set wordsBlockList(wordsBlockList: Array<FinancialStatementWordsBlockList>  | undefined) {
        this['words_block_list'] = wordsBlockList;
    }
    public get wordsBlockList(): Array<FinancialStatementWordsBlockList> | undefined {
        return this['words_block_list'];
    }
}