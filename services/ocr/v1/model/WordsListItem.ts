import { CharListItem } from './CharListItem';


export class WordsListItem {
    public words?: string;
    public confidence?: number;
    public location?: Array<Array<number>>;
    private 'char_list'?: Array<CharListItem>;
    public constructor() { 
    }
    public withWords(words: string): WordsListItem {
        this['words'] = words;
        return this;
    }
    public withConfidence(confidence: number): WordsListItem {
        this['confidence'] = confidence;
        return this;
    }
    public withLocation(location: Array<Array<number>>): WordsListItem {
        this['location'] = location;
        return this;
    }
    public withCharList(charList: Array<CharListItem>): WordsListItem {
        this['char_list'] = charList;
        return this;
    }
    public set charList(charList: Array<CharListItem>  | undefined) {
        this['char_list'] = charList;
    }
    public get charList(): Array<CharListItem> | undefined {
        return this['char_list'];
    }
}