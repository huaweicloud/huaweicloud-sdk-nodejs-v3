import { HotKeyInfo } from './HotKeyInfo';


export class HotKeyListData {
    public total?: number;
    private 'key_list'?: Array<HotKeyInfo>;
    public constructor() { 
    }
    public withTotal(total: number): HotKeyListData {
        this['total'] = total;
        return this;
    }
    public withKeyList(keyList: Array<HotKeyInfo>): HotKeyListData {
        this['key_list'] = keyList;
        return this;
    }
    public set keyList(keyList: Array<HotKeyInfo>  | undefined) {
        this['key_list'] = keyList;
    }
    public get keyList(): Array<HotKeyInfo> | undefined {
        return this['key_list'];
    }
}