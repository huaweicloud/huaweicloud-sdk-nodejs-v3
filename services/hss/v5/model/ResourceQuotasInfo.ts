import { AvailableResourceIdsInfo } from './AvailableResourceIdsInfo';


export class ResourceQuotasInfo {
    public version?: string;
    private 'total_num'?: number;
    private 'used_num'?: number;
    private 'available_num'?: number;
    private 'available_resources_list'?: Array<AvailableResourceIdsInfo>;
    public constructor() { 
    }
    public withVersion(version: string): ResourceQuotasInfo {
        this['version'] = version;
        return this;
    }
    public withTotalNum(totalNum: number): ResourceQuotasInfo {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withUsedNum(usedNum: number): ResourceQuotasInfo {
        this['used_num'] = usedNum;
        return this;
    }
    public set usedNum(usedNum: number  | undefined) {
        this['used_num'] = usedNum;
    }
    public get usedNum(): number | undefined {
        return this['used_num'];
    }
    public withAvailableNum(availableNum: number): ResourceQuotasInfo {
        this['available_num'] = availableNum;
        return this;
    }
    public set availableNum(availableNum: number  | undefined) {
        this['available_num'] = availableNum;
    }
    public get availableNum(): number | undefined {
        return this['available_num'];
    }
    public withAvailableResourcesList(availableResourcesList: Array<AvailableResourceIdsInfo>): ResourceQuotasInfo {
        this['available_resources_list'] = availableResourcesList;
        return this;
    }
    public set availableResourcesList(availableResourcesList: Array<AvailableResourceIdsInfo>  | undefined) {
        this['available_resources_list'] = availableResourcesList;
    }
    public get availableResourcesList(): Array<AvailableResourceIdsInfo> | undefined {
        return this['available_resources_list'];
    }
}