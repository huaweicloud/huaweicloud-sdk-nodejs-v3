import { WebImageExtractedData } from './WebImageExtractedData';
import { WebImageWordsBlockList } from './WebImageWordsBlockList';


export class WebImageResult {
    private 'words_block_count'?: number;
    private 'words_block_list'?: Array<WebImageWordsBlockList>;
    private 'extracted_data'?: WebImageExtractedData;
    public constructor(wordsBlockCount?: number, wordsBlockList?: Array<WebImageWordsBlockList>, extractedData?: WebImageExtractedData) { 
        this['words_block_count'] = wordsBlockCount;
        this['words_block_list'] = wordsBlockList;
        this['extracted_data'] = extractedData;
    }
    public withWordsBlockCount(wordsBlockCount: number): WebImageResult {
        this['words_block_count'] = wordsBlockCount;
        return this;
    }
    public set wordsBlockCount(wordsBlockCount: number  | undefined) {
        this['words_block_count'] = wordsBlockCount;
    }
    public get wordsBlockCount(): number | undefined {
        return this['words_block_count'];
    }
    public withWordsBlockList(wordsBlockList: Array<WebImageWordsBlockList>): WebImageResult {
        this['words_block_list'] = wordsBlockList;
        return this;
    }
    public set wordsBlockList(wordsBlockList: Array<WebImageWordsBlockList>  | undefined) {
        this['words_block_list'] = wordsBlockList;
    }
    public get wordsBlockList(): Array<WebImageWordsBlockList> | undefined {
        return this['words_block_list'];
    }
    public withExtractedData(extractedData: WebImageExtractedData): WebImageResult {
        this['extracted_data'] = extractedData;
        return this;
    }
    public set extractedData(extractedData: WebImageExtractedData  | undefined) {
        this['extracted_data'] = extractedData;
    }
    public get extractedData(): WebImageExtractedData | undefined {
        return this['extracted_data'];
    }
}