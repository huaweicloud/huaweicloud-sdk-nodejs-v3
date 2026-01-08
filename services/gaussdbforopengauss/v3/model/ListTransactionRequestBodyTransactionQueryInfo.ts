

export class ListTransactionRequestBodyTransactionQueryInfo {
    private 'exec_time'?: string;
    private 'xlog_quantity'?: string;
    public datnames?: Array<string>;
    public usenames?: Array<string>;
    private 'client_addrs'?: Array<string>;
    public constructor() { 
    }
    public withExecTime(execTime: string): ListTransactionRequestBodyTransactionQueryInfo {
        this['exec_time'] = execTime;
        return this;
    }
    public set execTime(execTime: string  | undefined) {
        this['exec_time'] = execTime;
    }
    public get execTime(): string | undefined {
        return this['exec_time'];
    }
    public withXlogQuantity(xlogQuantity: string): ListTransactionRequestBodyTransactionQueryInfo {
        this['xlog_quantity'] = xlogQuantity;
        return this;
    }
    public set xlogQuantity(xlogQuantity: string  | undefined) {
        this['xlog_quantity'] = xlogQuantity;
    }
    public get xlogQuantity(): string | undefined {
        return this['xlog_quantity'];
    }
    public withDatnames(datnames: Array<string>): ListTransactionRequestBodyTransactionQueryInfo {
        this['datnames'] = datnames;
        return this;
    }
    public withUsenames(usenames: Array<string>): ListTransactionRequestBodyTransactionQueryInfo {
        this['usenames'] = usenames;
        return this;
    }
    public withClientAddrs(clientAddrs: Array<string>): ListTransactionRequestBodyTransactionQueryInfo {
        this['client_addrs'] = clientAddrs;
        return this;
    }
    public set clientAddrs(clientAddrs: Array<string>  | undefined) {
        this['client_addrs'] = clientAddrs;
    }
    public get clientAddrs(): Array<string> | undefined {
        return this['client_addrs'];
    }
}