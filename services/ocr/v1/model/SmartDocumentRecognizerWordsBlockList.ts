import { SmartDocumentRecognizerCharList } from './SmartDocumentRecognizerCharList';


export class SmartDocumentRecognizerWordsBlockList {
    public words?: string;
    public location?: Array<Array<number>>;
    public confidence?: number;
    private 'char_list'?: Array<SmartDocumentRecognizerCharList>;
    public constructor() { 
    }
    public withWords(words: string): SmartDocumentRecognizerWordsBlockList {
        this['words'] = words;
        return this;
    }
    public withLocation(location: Array<Array<number>>): SmartDocumentRecognizerWordsBlockList {
        this['location'] = location;
        return this;
    }
    public withConfidence(confidence: number): SmartDocumentRecognizerWordsBlockList {
        this['confidence'] = confidence;
        return this;
    }
    public withCharList(charList: Array<SmartDocumentRecognizerCharList>): SmartDocumentRecognizerWordsBlockList {
        this['char_list'] = charList;
        return this;
    }
    public set charList(charList: Array<SmartDocumentRecognizerCharList>  | undefined) {
        this['char_list'] = charList;
    }
    public get charList(): Array<SmartDocumentRecognizerCharList> | undefined {
        return this['char_list'];
    }
}