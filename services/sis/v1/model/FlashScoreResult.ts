import { WordInfo } from './WordInfo';


export class FlashScoreResult {
    public text?: string;
    public score?: number;
    private 'word_info'?: Array<WordInfo>;
    public constructor(text?: string, score?: number) { 
        this['text'] = text;
        this['score'] = score;
    }
    public withText(text: string): FlashScoreResult {
        this['text'] = text;
        return this;
    }
    public withScore(score: number): FlashScoreResult {
        this['score'] = score;
        return this;
    }
    public withWordInfo(wordInfo: Array<WordInfo>): FlashScoreResult {
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