import { HealthCodeWordsBlockList } from './HealthCodeWordsBlockList';


export class HealthCodeResult {
    public name: string;
    public time: string;
    public color: string;
    public confidence: object;
    private 'words_block_count': number | undefined;
    private 'words_block_list': Array<HealthCodeWordsBlockList> | undefined;
    public constructor(name?: any, time?: any, color?: any, confidence?: any, wordsBlockCount?: any, wordsBlockList?: any) { 
        this['name'] = name;
        this['time'] = time;
        this['color'] = color;
        this['confidence'] = confidence;
        this['words_block_count'] = wordsBlockCount;
        this['words_block_list'] = wordsBlockList;
    }
    public withName(name: string): HealthCodeResult {
        this['name'] = name;
        return this;
    }
    public withTime(time: string): HealthCodeResult {
        this['time'] = time;
        return this;
    }
    public withColor(color: string): HealthCodeResult {
        this['color'] = color;
        return this;
    }
    public withConfidence(confidence: object): HealthCodeResult {
        this['confidence'] = confidence;
        return this;
    }
    public withWordsBlockCount(wordsBlockCount: number): HealthCodeResult {
        this['words_block_count'] = wordsBlockCount;
        return this;
    }
    public set wordsBlockCount(wordsBlockCount: number | undefined) {
        this['words_block_count'] = wordsBlockCount;
    }
    public get wordsBlockCount() {
        return this['words_block_count'];
    }
    public withWordsBlockList(wordsBlockList: Array<HealthCodeWordsBlockList>): HealthCodeResult {
        this['words_block_list'] = wordsBlockList;
        return this;
    }
    public set wordsBlockList(wordsBlockList: Array<HealthCodeWordsBlockList> | undefined) {
        this['words_block_list'] = wordsBlockList;
    }
    public get wordsBlockList() {
        return this['words_block_list'];
    }
}