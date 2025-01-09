import { CreateTerminalsBindingDesktopsInfo } from './CreateTerminalsBindingDesktopsInfo';


export class CreateTerminalsBindingDesktopsRequestBody {
    private 'bind_list'?: Array<CreateTerminalsBindingDesktopsInfo>;
    public constructor() { 
    }
    public withBindList(bindList: Array<CreateTerminalsBindingDesktopsInfo>): CreateTerminalsBindingDesktopsRequestBody {
        this['bind_list'] = bindList;
        return this;
    }
    public set bindList(bindList: Array<CreateTerminalsBindingDesktopsInfo>  | undefined) {
        this['bind_list'] = bindList;
    }
    public get bindList(): Array<CreateTerminalsBindingDesktopsInfo> | undefined {
        return this['bind_list'];
    }
}