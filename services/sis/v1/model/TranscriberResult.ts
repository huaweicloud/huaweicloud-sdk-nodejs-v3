import { AnalysisInfoResult } from './AnalysisInfoResult';
import { WordInfo } from './WordInfo';


export class TranscriberResult {
    public text: string;
    private 'analysis_info'?: AnalysisInfoResult | undefined;
    private 'word_info'?: Array<WordInfo> | undefined;
    public constructor(text?: any) { 
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
    public set analysisInfo(analysisInfo: AnalysisInfoResult | undefined) {
        this['analysis_info'] = analysisInfo;
    }
    public get analysisInfo() {
        return this['analysis_info'];
    }
    public withWordInfo(wordInfo: Array<WordInfo>): TranscriberResult {
        this['word_info'] = wordInfo;
        return this;
    }
    public set wordInfo(wordInfo: Array<WordInfo> | undefined) {
        this['word_info'] = wordInfo;
    }
    public get wordInfo() {
        return this['word_info'];
    }
}