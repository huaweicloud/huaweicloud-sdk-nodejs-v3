import { Phoneme } from './Phoneme';
import { WordFluency } from './WordFluency';
import { WordPronunciation } from './WordPronunciation';


export class Word {
    public text?: string;
    private 'text_original'?: string;
    private 'text_normalised'?: Array<string>;
    private 'out_of_vocabulary'?: boolean;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public score?: number;
    public pronunciation?: WordPronunciation;
    public fluency?: WordFluency;
    public phonemes?: Array<Phoneme>;
    public constructor(text?: string, textOriginal?: string, textNormalised?: Array<string>) { 
        this['text'] = text;
        this['text_original'] = textOriginal;
        this['text_normalised'] = textNormalised;
    }
    public withText(text: string): Word {
        this['text'] = text;
        return this;
    }
    public withTextOriginal(textOriginal: string): Word {
        this['text_original'] = textOriginal;
        return this;
    }
    public set textOriginal(textOriginal: string  | undefined) {
        this['text_original'] = textOriginal;
    }
    public get textOriginal(): string | undefined {
        return this['text_original'];
    }
    public withTextNormalised(textNormalised: Array<string>): Word {
        this['text_normalised'] = textNormalised;
        return this;
    }
    public set textNormalised(textNormalised: Array<string>  | undefined) {
        this['text_normalised'] = textNormalised;
    }
    public get textNormalised(): Array<string> | undefined {
        return this['text_normalised'];
    }
    public withOutOfVocabulary(outOfVocabulary: boolean): Word {
        this['out_of_vocabulary'] = outOfVocabulary;
        return this;
    }
    public set outOfVocabulary(outOfVocabulary: boolean  | undefined) {
        this['out_of_vocabulary'] = outOfVocabulary;
    }
    public get outOfVocabulary(): boolean | undefined {
        return this['out_of_vocabulary'];
    }
    public withStartTime(startTime: number): Word {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): Word {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withScore(score: number): Word {
        this['score'] = score;
        return this;
    }
    public withPronunciation(pronunciation: WordPronunciation): Word {
        this['pronunciation'] = pronunciation;
        return this;
    }
    public withFluency(fluency: WordFluency): Word {
        this['fluency'] = fluency;
        return this;
    }
    public withPhonemes(phonemes: Array<Phoneme>): Word {
        this['phonemes'] = phonemes;
        return this;
    }
}