

export class ProxyTransactionSplitRequest {
    private 'transaction_split'?: string;
    private 'proxy_id_list'?: Array<string>;
    public constructor(transactionSplit?: string, proxyIdList?: Array<string>) { 
        this['transaction_split'] = transactionSplit;
        this['proxy_id_list'] = proxyIdList;
    }
    public withTransactionSplit(transactionSplit: string): ProxyTransactionSplitRequest {
        this['transaction_split'] = transactionSplit;
        return this;
    }
    public set transactionSplit(transactionSplit: string  | undefined) {
        this['transaction_split'] = transactionSplit;
    }
    public get transactionSplit(): string | undefined {
        return this['transaction_split'];
    }
    public withProxyIdList(proxyIdList: Array<string>): ProxyTransactionSplitRequest {
        this['proxy_id_list'] = proxyIdList;
        return this;
    }
    public set proxyIdList(proxyIdList: Array<string>  | undefined) {
        this['proxy_id_list'] = proxyIdList;
    }
    public get proxyIdList(): Array<string> | undefined {
        return this['proxy_id_list'];
    }
}