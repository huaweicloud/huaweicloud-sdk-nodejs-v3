import { HotWordsTypeEnum } from './HotWordsTypeEnum';
import { UpdateSisHotWords } from './UpdateSisHotWords';


export class UpdateHotWordsReq {
    private 'hot_words_type'?: HotWordsTypeEnum;
    private 'sis_hot_words'?: UpdateSisHotWords;
    public constructor(hotWordsType?: HotWordsTypeEnum, sisHotWords?: UpdateSisHotWords) { 
        this['hot_words_type'] = hotWordsType;
        this['sis_hot_words'] = sisHotWords;
    }
    public withHotWordsType(hotWordsType: HotWordsTypeEnum): UpdateHotWordsReq {
        this['hot_words_type'] = hotWordsType;
        return this;
    }
    public set hotWordsType(hotWordsType: HotWordsTypeEnum  | undefined) {
        this['hot_words_type'] = hotWordsType;
    }
    public get hotWordsType(): HotWordsTypeEnum | undefined {
        return this['hot_words_type'];
    }
    public withSisHotWords(sisHotWords: UpdateSisHotWords): UpdateHotWordsReq {
        this['sis_hot_words'] = sisHotWords;
        return this;
    }
    public set sisHotWords(sisHotWords: UpdateSisHotWords  | undefined) {
        this['sis_hot_words'] = sisHotWords;
    }
    public get sisHotWords(): UpdateSisHotWords | undefined {
        return this['sis_hot_words'];
    }
}