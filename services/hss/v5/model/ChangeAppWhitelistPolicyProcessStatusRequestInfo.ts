

export class ChangeAppWhitelistPolicyProcessStatusRequestInfo {
    private 'process_status'?: string;
    private 'process_hash_list'?: Array<string>;
    public constructor(processStatus?: string, processHashList?: Array<string>) { 
        this['process_status'] = processStatus;
        this['process_hash_list'] = processHashList;
    }
    public withProcessStatus(processStatus: string): ChangeAppWhitelistPolicyProcessStatusRequestInfo {
        this['process_status'] = processStatus;
        return this;
    }
    public set processStatus(processStatus: string  | undefined) {
        this['process_status'] = processStatus;
    }
    public get processStatus(): string | undefined {
        return this['process_status'];
    }
    public withProcessHashList(processHashList: Array<string>): ChangeAppWhitelistPolicyProcessStatusRequestInfo {
        this['process_hash_list'] = processHashList;
        return this;
    }
    public set processHashList(processHashList: Array<string>  | undefined) {
        this['process_hash_list'] = processHashList;
    }
    public get processHashList(): Array<string> | undefined {
        return this['process_hash_list'];
    }
}