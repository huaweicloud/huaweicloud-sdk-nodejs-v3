import { CharListIem } from './CharListIem';


export class WordsListIem {
    public words?: string;
    public confidence?: number;
    public location?: Array<Array<number>>;
    private 'char_list'?: Array<CharListIem> | undefined;
    public constructor() { 
    }
    public withWords(words: string): WordsListIem {
        this['words'] = words;
        return this;
    }
    public withConfidence(confidence: number): WordsListIem {
        this['confidence'] = confidence;
        return this;
    }
    public withLocation(location: Array<Array<number>>): WordsListIem {
        this['location'] = location;
        return this;
    }
    public withCharList(charList: Array<CharListIem>): WordsListIem {
        this['char_list'] = charList;
        return this;
    }
    public set charList(charList: Array<CharListIem> | undefined) {
        this['char_list'] = charList;
    }
    public get charList() {
        return this['char_list'];
    }
}