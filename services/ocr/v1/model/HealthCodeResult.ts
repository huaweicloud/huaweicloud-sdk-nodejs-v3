import { HealthCodeWordsBlockList } from './HealthCodeWordsBlockList';


export class HealthCodeResult {
    public type: string;
    public name: string;
    private 'idcard_number': string | undefined;
    private 'phone_number': string | undefined;
    public province: string;
    public city: string;
    public time: string;
    public color: string;
    private 'vaccination_status': string | undefined;
    private 'test_interval': string | undefined;
    private 'pcr_test_result': string | undefined;
    private 'pcr_test_organization': string | undefined;
    private 'pcr_test_time': string | undefined;
    private 'pcr_sampling_time': string | undefined;
    private 'reached_city': Array<string> | undefined;
    public confidence: object;
    private 'words_block_count': number | undefined;
    private 'words_block_list': Array<HealthCodeWordsBlockList> | undefined;
    public constructor(type?: any, name?: any, idcardNumber?: any, phoneNumber?: any, province?: any, city?: any, time?: any, color?: any, vaccinationStatus?: any, testInterval?: any, pcrTestResult?: any, pcrTestOrganization?: any, pcrTestTime?: any, pcrSamplingTime?: any, reachedCity?: any, confidence?: any, wordsBlockCount?: any, wordsBlockList?: any) { 
        this['type'] = type;
        this['name'] = name;
        this['idcard_number'] = idcardNumber;
        this['phone_number'] = phoneNumber;
        this['province'] = province;
        this['city'] = city;
        this['time'] = time;
        this['color'] = color;
        this['vaccination_status'] = vaccinationStatus;
        this['test_interval'] = testInterval;
        this['pcr_test_result'] = pcrTestResult;
        this['pcr_test_organization'] = pcrTestOrganization;
        this['pcr_test_time'] = pcrTestTime;
        this['pcr_sampling_time'] = pcrSamplingTime;
        this['reached_city'] = reachedCity;
        this['confidence'] = confidence;
        this['words_block_count'] = wordsBlockCount;
        this['words_block_list'] = wordsBlockList;
    }
    public withType(type: string): HealthCodeResult {
        this['type'] = type;
        return this;
    }
    public withName(name: string): HealthCodeResult {
        this['name'] = name;
        return this;
    }
    public withIdcardNumber(idcardNumber: string): HealthCodeResult {
        this['idcard_number'] = idcardNumber;
        return this;
    }
    public set idcardNumber(idcardNumber: string | undefined) {
        this['idcard_number'] = idcardNumber;
    }
    public get idcardNumber() {
        return this['idcard_number'];
    }
    public withPhoneNumber(phoneNumber: string): HealthCodeResult {
        this['phone_number'] = phoneNumber;
        return this;
    }
    public set phoneNumber(phoneNumber: string | undefined) {
        this['phone_number'] = phoneNumber;
    }
    public get phoneNumber() {
        return this['phone_number'];
    }
    public withProvince(province: string): HealthCodeResult {
        this['province'] = province;
        return this;
    }
    public withCity(city: string): HealthCodeResult {
        this['city'] = city;
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
    public withVaccinationStatus(vaccinationStatus: string): HealthCodeResult {
        this['vaccination_status'] = vaccinationStatus;
        return this;
    }
    public set vaccinationStatus(vaccinationStatus: string | undefined) {
        this['vaccination_status'] = vaccinationStatus;
    }
    public get vaccinationStatus() {
        return this['vaccination_status'];
    }
    public withTestInterval(testInterval: string): HealthCodeResult {
        this['test_interval'] = testInterval;
        return this;
    }
    public set testInterval(testInterval: string | undefined) {
        this['test_interval'] = testInterval;
    }
    public get testInterval() {
        return this['test_interval'];
    }
    public withPcrTestResult(pcrTestResult: string): HealthCodeResult {
        this['pcr_test_result'] = pcrTestResult;
        return this;
    }
    public set pcrTestResult(pcrTestResult: string | undefined) {
        this['pcr_test_result'] = pcrTestResult;
    }
    public get pcrTestResult() {
        return this['pcr_test_result'];
    }
    public withPcrTestOrganization(pcrTestOrganization: string): HealthCodeResult {
        this['pcr_test_organization'] = pcrTestOrganization;
        return this;
    }
    public set pcrTestOrganization(pcrTestOrganization: string | undefined) {
        this['pcr_test_organization'] = pcrTestOrganization;
    }
    public get pcrTestOrganization() {
        return this['pcr_test_organization'];
    }
    public withPcrTestTime(pcrTestTime: string): HealthCodeResult {
        this['pcr_test_time'] = pcrTestTime;
        return this;
    }
    public set pcrTestTime(pcrTestTime: string | undefined) {
        this['pcr_test_time'] = pcrTestTime;
    }
    public get pcrTestTime() {
        return this['pcr_test_time'];
    }
    public withPcrSamplingTime(pcrSamplingTime: string): HealthCodeResult {
        this['pcr_sampling_time'] = pcrSamplingTime;
        return this;
    }
    public set pcrSamplingTime(pcrSamplingTime: string | undefined) {
        this['pcr_sampling_time'] = pcrSamplingTime;
    }
    public get pcrSamplingTime() {
        return this['pcr_sampling_time'];
    }
    public withReachedCity(reachedCity: Array<string>): HealthCodeResult {
        this['reached_city'] = reachedCity;
        return this;
    }
    public set reachedCity(reachedCity: Array<string> | undefined) {
        this['reached_city'] = reachedCity;
    }
    public get reachedCity() {
        return this['reached_city'];
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