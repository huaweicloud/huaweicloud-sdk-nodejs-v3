import { KmsInfo } from './KmsInfo';


export class KmsResourceInfo {
    private 'total_num'?: number;
    public result?: KmsInfo;
    public constructor(totalNum?: number, result?: KmsInfo) { 
        this['total_num'] = totalNum;
        this['result'] = result;
    }
    public withTotalNum(totalNum: number): KmsResourceInfo {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withResult(result: KmsInfo): KmsResourceInfo {
        this['result'] = result;
        return this;
    }
}