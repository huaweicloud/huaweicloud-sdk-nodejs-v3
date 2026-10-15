import { BigKeyInfo } from './BigKeyInfo';


export class BigKeyListData {
    public total?: number;
    private 'key_list'?: Array<BigKeyInfo>;
    public constructor() { 
    }
    public withTotal(total: number): BigKeyListData {
        this['total'] = total;
        return this;
    }
    public withKeyList(keyList: Array<BigKeyInfo>): BigKeyListData {
        this['key_list'] = keyList;
        return this;
    }
    public set keyList(keyList: Array<BigKeyInfo>  | undefined) {
        this['key_list'] = keyList;
    }
    public get keyList(): Array<BigKeyInfo> | undefined {
        return this['key_list'];
    }
}