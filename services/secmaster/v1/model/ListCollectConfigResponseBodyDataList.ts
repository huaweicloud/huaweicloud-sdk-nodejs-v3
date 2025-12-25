import { ListCollectConfigResponseBodyDatasets } from './ListCollectConfigResponseBodyDatasets';


export class ListCollectConfigResponseBodyDataList {
    private 'account_all_num'?: number;
    private 'account_successful_num'?: number;
    public csvc?: string;
    public datasets?: Array<ListCollectConfigResponseBodyDatasets>;
    private 'last_modified_time'?: number;
    private 'log_all_num'?: number;
    private 'log_in_num'?: number;
    private 'log_in_num_last_one_hour'?: number;
    private 'process_status'?: string;
    public vendor?: string;
    public constructor() { 
    }
    public withAccountAllNum(accountAllNum: number): ListCollectConfigResponseBodyDataList {
        this['account_all_num'] = accountAllNum;
        return this;
    }
    public set accountAllNum(accountAllNum: number  | undefined) {
        this['account_all_num'] = accountAllNum;
    }
    public get accountAllNum(): number | undefined {
        return this['account_all_num'];
    }
    public withAccountSuccessfulNum(accountSuccessfulNum: number): ListCollectConfigResponseBodyDataList {
        this['account_successful_num'] = accountSuccessfulNum;
        return this;
    }
    public set accountSuccessfulNum(accountSuccessfulNum: number  | undefined) {
        this['account_successful_num'] = accountSuccessfulNum;
    }
    public get accountSuccessfulNum(): number | undefined {
        return this['account_successful_num'];
    }
    public withCsvc(csvc: string): ListCollectConfigResponseBodyDataList {
        this['csvc'] = csvc;
        return this;
    }
    public withDatasets(datasets: Array<ListCollectConfigResponseBodyDatasets>): ListCollectConfigResponseBodyDataList {
        this['datasets'] = datasets;
        return this;
    }
    public withLastModifiedTime(lastModifiedTime: number): ListCollectConfigResponseBodyDataList {
        this['last_modified_time'] = lastModifiedTime;
        return this;
    }
    public set lastModifiedTime(lastModifiedTime: number  | undefined) {
        this['last_modified_time'] = lastModifiedTime;
    }
    public get lastModifiedTime(): number | undefined {
        return this['last_modified_time'];
    }
    public withLogAllNum(logAllNum: number): ListCollectConfigResponseBodyDataList {
        this['log_all_num'] = logAllNum;
        return this;
    }
    public set logAllNum(logAllNum: number  | undefined) {
        this['log_all_num'] = logAllNum;
    }
    public get logAllNum(): number | undefined {
        return this['log_all_num'];
    }
    public withLogInNum(logInNum: number): ListCollectConfigResponseBodyDataList {
        this['log_in_num'] = logInNum;
        return this;
    }
    public set logInNum(logInNum: number  | undefined) {
        this['log_in_num'] = logInNum;
    }
    public get logInNum(): number | undefined {
        return this['log_in_num'];
    }
    public withLogInNumLastOneHour(logInNumLastOneHour: number): ListCollectConfigResponseBodyDataList {
        this['log_in_num_last_one_hour'] = logInNumLastOneHour;
        return this;
    }
    public set logInNumLastOneHour(logInNumLastOneHour: number  | undefined) {
        this['log_in_num_last_one_hour'] = logInNumLastOneHour;
    }
    public get logInNumLastOneHour(): number | undefined {
        return this['log_in_num_last_one_hour'];
    }
    public withProcessStatus(processStatus: string): ListCollectConfigResponseBodyDataList {
        this['process_status'] = processStatus;
        return this;
    }
    public set processStatus(processStatus: string  | undefined) {
        this['process_status'] = processStatus;
    }
    public get processStatus(): string | undefined {
        return this['process_status'];
    }
    public withVendor(vendor: string): ListCollectConfigResponseBodyDataList {
        this['vendor'] = vendor;
        return this;
    }
}