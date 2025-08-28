import { LanguageEnum } from './LanguageEnum';


export class InstructionReplyWordsInfo {
    public language?: LanguageEnum;
    private 'reply_words'?: string;
    public constructor(language?: LanguageEnum, replyWords?: string) { 
        this['language'] = language;
        this['reply_words'] = replyWords;
    }
    public withLanguage(language: LanguageEnum): InstructionReplyWordsInfo {
        this['language'] = language;
        return this;
    }
    public withReplyWords(replyWords: string): InstructionReplyWordsInfo {
        this['reply_words'] = replyWords;
        return this;
    }
    public set replyWords(replyWords: string  | undefined) {
        this['reply_words'] = replyWords;
    }
    public get replyWords(): string | undefined {
        return this['reply_words'];
    }
}