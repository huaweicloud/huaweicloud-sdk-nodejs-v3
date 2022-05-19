import { PcrTestRecordWordsBlockList } from './PcrTestRecordWordsBlockList';


export class PcrTestRecordResult {
    public name: string;
    private 'sampling_time': string | undefined;
    private 'test_time': string | undefined;
    private 'test_result': string | undefined;
    public confidence: number;
    private 'words_block_count': number | undefined;
    private 'words_block_list': Array<PcrTestRecordWordsBlockList> | undefined;
    public constructor(name?: any, samplingTime?: any, testTime?: any, testResult?: any, confidence?: any, wordsBlockCount?: any, wordsBlockList?: any) { 
        this['name'] = name;
        this['sampling_time'] = samplingTime;
        this['test_time'] = testTime;
        this['test_result'] = testResult;
        this['confidence'] = confidence;
        this['words_block_count'] = wordsBlockCount;
        this['words_block_list'] = wordsBlockList;
    }
    public withName(name: string): PcrTestRecordResult {
        this['name'] = name;
        return this;
    }
    public withSamplingTime(samplingTime: string): PcrTestRecordResult {
        this['sampling_time'] = samplingTime;
        return this;
    }
    public set samplingTime(samplingTime: string | undefined) {
        this['sampling_time'] = samplingTime;
    }
    public get samplingTime() {
        return this['sampling_time'];
    }
    public withTestTime(testTime: string): PcrTestRecordResult {
        this['test_time'] = testTime;
        return this;
    }
    public set testTime(testTime: string | undefined) {
        this['test_time'] = testTime;
    }
    public get testTime() {
        return this['test_time'];
    }
    public withTestResult(testResult: string): PcrTestRecordResult {
        this['test_result'] = testResult;
        return this;
    }
    public set testResult(testResult: string | undefined) {
        this['test_result'] = testResult;
    }
    public get testResult() {
        return this['test_result'];
    }
    public withConfidence(confidence: number): PcrTestRecordResult {
        this['confidence'] = confidence;
        return this;
    }
    public withWordsBlockCount(wordsBlockCount: number): PcrTestRecordResult {
        this['words_block_count'] = wordsBlockCount;
        return this;
    }
    public set wordsBlockCount(wordsBlockCount: number | undefined) {
        this['words_block_count'] = wordsBlockCount;
    }
    public get wordsBlockCount() {
        return this['words_block_count'];
    }
    public withWordsBlockList(wordsBlockList: Array<PcrTestRecordWordsBlockList>): PcrTestRecordResult {
        this['words_block_list'] = wordsBlockList;
        return this;
    }
    public set wordsBlockList(wordsBlockList: Array<PcrTestRecordWordsBlockList> | undefined) {
        this['words_block_list'] = wordsBlockList;
    }
    public get wordsBlockList() {
        return this['words_block_list'];
    }
}