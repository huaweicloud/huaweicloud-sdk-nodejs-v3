import { GeneralTextWordsBlockList } from './GeneralTextWordsBlockList';


export class GeneralTextResult {
    public direction?: number;
    private 'words_block_count'?: number;
    private 'words_block_list'?: Array<GeneralTextWordsBlockList>;
    private 'markdown_result'?: string;
    public constructor(direction?: number, wordsBlockCount?: number, wordsBlockList?: Array<GeneralTextWordsBlockList>) { 
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
    public set wordsBlockCount(wordsBlockCount: number  | undefined) {
        this['words_block_count'] = wordsBlockCount;
    }
    public get wordsBlockCount(): number | undefined {
        return this['words_block_count'];
    }
    public withWordsBlockList(wordsBlockList: Array<GeneralTextWordsBlockList>): GeneralTextResult {
        this['words_block_list'] = wordsBlockList;
        return this;
    }
    public set wordsBlockList(wordsBlockList: Array<GeneralTextWordsBlockList>  | undefined) {
        this['words_block_list'] = wordsBlockList;
    }
    public get wordsBlockList(): Array<GeneralTextWordsBlockList> | undefined {
        return this['words_block_list'];
    }
    public withMarkdownResult(markdownResult: string): GeneralTextResult {
        this['markdown_result'] = markdownResult;
        return this;
    }
    public set markdownResult(markdownResult: string  | undefined) {
        this['markdown_result'] = markdownResult;
    }
    public get markdownResult(): string | undefined {
        return this['markdown_result'];
    }
}