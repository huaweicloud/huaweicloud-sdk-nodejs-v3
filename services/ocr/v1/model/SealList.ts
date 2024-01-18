import { SealWordsBlockList } from './SealWordsBlockList';


export class SealList {
    public type?: string;
    private 'seal_image'?: string;
    public confidence?: number;
    public location?: Array<Array<number>>;
    private 'words_block_list'?: Array<SealWordsBlockList>;
    public constructor() { 
    }
    public withType(type: string): SealList {
        this['type'] = type;
        return this;
    }
    public withSealImage(sealImage: string): SealList {
        this['seal_image'] = sealImage;
        return this;
    }
    public set sealImage(sealImage: string  | undefined) {
        this['seal_image'] = sealImage;
    }
    public get sealImage(): string | undefined {
        return this['seal_image'];
    }
    public withConfidence(confidence: number): SealList {
        this['confidence'] = confidence;
        return this;
    }
    public withLocation(location: Array<Array<number>>): SealList {
        this['location'] = location;
        return this;
    }
    public withWordsBlockList(wordsBlockList: Array<SealWordsBlockList>): SealList {
        this['words_block_list'] = wordsBlockList;
        return this;
    }
    public set wordsBlockList(wordsBlockList: Array<SealWordsBlockList>  | undefined) {
        this['words_block_list'] = wordsBlockList;
    }
    public get wordsBlockList(): Array<SealWordsBlockList> | undefined {
        return this['words_block_list'];
    }
}