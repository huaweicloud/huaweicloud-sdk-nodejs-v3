import { ListKeystoreSearchResponseBodyResultKeystoreList } from './ListKeystoreSearchResponseBodyResultKeystoreList';


export class ListKeystoreSearchResponseBodyResult {
    public total?: number;
    private 'keystore_list'?: Array<ListKeystoreSearchResponseBodyResultKeystoreList>;
    public constructor() { 
    }
    public withTotal(total: number): ListKeystoreSearchResponseBodyResult {
        this['total'] = total;
        return this;
    }
    public withKeystoreList(keystoreList: Array<ListKeystoreSearchResponseBodyResultKeystoreList>): ListKeystoreSearchResponseBodyResult {
        this['keystore_list'] = keystoreList;
        return this;
    }
    public set keystoreList(keystoreList: Array<ListKeystoreSearchResponseBodyResultKeystoreList>  | undefined) {
        this['keystore_list'] = keystoreList;
    }
    public get keystoreList(): Array<ListKeystoreSearchResponseBodyResultKeystoreList> | undefined {
        return this['keystore_list'];
    }
}