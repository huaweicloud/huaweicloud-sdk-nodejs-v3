import { CreateMobvoiHotWords } from './CreateMobvoiHotWords';
import { CreateSisHotWords } from './CreateSisHotWords';
import { HotWordsTypeEnum } from './HotWordsTypeEnum';


export class CreateHotWordsReq {
    private 'hot_words_type'?: HotWordsTypeEnum;
    private 'robot_id'?: string;
    private 'sis_hot_words'?: CreateSisHotWords;
    private 'mobvoi_hot_words'?: CreateMobvoiHotWords;
    public constructor(hotWordsType?: HotWordsTypeEnum, robotId?: string) { 
        this['hot_words_type'] = hotWordsType;
        this['robot_id'] = robotId;
    }
    public withHotWordsType(hotWordsType: HotWordsTypeEnum): CreateHotWordsReq {
        this['hot_words_type'] = hotWordsType;
        return this;
    }
    public set hotWordsType(hotWordsType: HotWordsTypeEnum  | undefined) {
        this['hot_words_type'] = hotWordsType;
    }
    public get hotWordsType(): HotWordsTypeEnum | undefined {
        return this['hot_words_type'];
    }
    public withRobotId(robotId: string): CreateHotWordsReq {
        this['robot_id'] = robotId;
        return this;
    }
    public set robotId(robotId: string  | undefined) {
        this['robot_id'] = robotId;
    }
    public get robotId(): string | undefined {
        return this['robot_id'];
    }
    public withSisHotWords(sisHotWords: CreateSisHotWords): CreateHotWordsReq {
        this['sis_hot_words'] = sisHotWords;
        return this;
    }
    public set sisHotWords(sisHotWords: CreateSisHotWords  | undefined) {
        this['sis_hot_words'] = sisHotWords;
    }
    public get sisHotWords(): CreateSisHotWords | undefined {
        return this['sis_hot_words'];
    }
    public withMobvoiHotWords(mobvoiHotWords: CreateMobvoiHotWords): CreateHotWordsReq {
        this['mobvoi_hot_words'] = mobvoiHotWords;
        return this;
    }
    public set mobvoiHotWords(mobvoiHotWords: CreateMobvoiHotWords  | undefined) {
        this['mobvoi_hot_words'] = mobvoiHotWords;
    }
    public get mobvoiHotWords(): CreateMobvoiHotWords | undefined {
        return this['mobvoi_hot_words'];
    }
}