import { AnalysisInfoResult } from './AnalysisInfoResult';
import { WordInfo } from './WordInfo';


export class TranscriberResult {
    public text?: string;
    private 'analysis_info'?: AnalysisInfoResult;
    private 'word_info'?: Array<WordInfo>;
    public constructor(text?: string) { 
        this['text'] = text;
    }
    public withText(text: string): TranscriberResult {
        this['text'] = text;
        return this;
    }
    public withAnalysisInfo(analysisInfo: AnalysisInfoResult): TranscriberResult {
        this['analysis_info'] = analysisInfo;
        return this;
    }
    public set analysisInfo(analysisInfo: AnalysisInfoResult  | undefined) {
        this['analysis_info'] = analysisInfo;
    }
    public get analysisInfo(): AnalysisInfoResult | undefined {
        return this['analysis_info'];
    }
    public withWordInfo(wordInfo: Array<WordInfo>): TranscriberResult {
        this['word_info'] = wordInfo;
        return this;
    }
    public set wordInfo(wordInfo: Array<WordInfo>  | undefined) {
        this['word_info'] = wordInfo;
    }
    public get wordInfo(): Array<WordInfo> | undefined {
        return this['word_info'];
    }
}