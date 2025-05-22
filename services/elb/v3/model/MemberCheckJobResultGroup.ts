import { MemberCheckJobResultItem } from './MemberCheckJobResultItem';


export class MemberCheckJobResultGroup {
    private 'check_result'?: boolean;
    private 'check_items'?: Array<MemberCheckJobResultItem>;
    private 'check_status'?: string;
    public constructor() { 
    }
    public withCheckResult(checkResult: boolean): MemberCheckJobResultGroup {
        this['check_result'] = checkResult;
        return this;
    }
    public set checkResult(checkResult: boolean  | undefined) {
        this['check_result'] = checkResult;
    }
    public get checkResult(): boolean | undefined {
        return this['check_result'];
    }
    public withCheckItems(checkItems: Array<MemberCheckJobResultItem>): MemberCheckJobResultGroup {
        this['check_items'] = checkItems;
        return this;
    }
    public set checkItems(checkItems: Array<MemberCheckJobResultItem>  | undefined) {
        this['check_items'] = checkItems;
    }
    public get checkItems(): Array<MemberCheckJobResultItem> | undefined {
        return this['check_items'];
    }
    public withCheckStatus(checkStatus: string): MemberCheckJobResultGroup {
        this['check_status'] = checkStatus;
        return this;
    }
    public set checkStatus(checkStatus: string  | undefined) {
        this['check_status'] = checkStatus;
    }
    public get checkStatus(): string | undefined {
        return this['check_status'];
    }
}