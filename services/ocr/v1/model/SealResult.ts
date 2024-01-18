import { SealList } from './SealList';


export class SealResult {
    private 'seal_list'?: Array<SealList>;
    private 'erased_seal_image'?: string;
    public constructor() { 
    }
    public withSealList(sealList: Array<SealList>): SealResult {
        this['seal_list'] = sealList;
        return this;
    }
    public set sealList(sealList: Array<SealList>  | undefined) {
        this['seal_list'] = sealList;
    }
    public get sealList(): Array<SealList> | undefined {
        return this['seal_list'];
    }
    public withErasedSealImage(erasedSealImage: string): SealResult {
        this['erased_seal_image'] = erasedSealImage;
        return this;
    }
    public set erasedSealImage(erasedSealImage: string  | undefined) {
        this['erased_seal_image'] = erasedSealImage;
    }
    public get erasedSealImage(): string | undefined {
        return this['erased_seal_image'];
    }
}