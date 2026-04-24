import { SubscribeOperationReq } from './SubscribeOperationReq';


export class SubscribeAiAssistantReq {
    public add?: SubscribeOperationReq;
    private 'delete'?: SubscribeOperationReq;
    public constructor() { 
    }
    public withAdd(add: SubscribeOperationReq): SubscribeAiAssistantReq {
        this['add'] = add;
        return this;
    }
    public withDelete(_delete: SubscribeOperationReq): SubscribeAiAssistantReq {
        this['delete'] = _delete;
        return this;
    }
    public set _delete(_delete: SubscribeOperationReq  | undefined) {
        this['delete'] = _delete;
    }
    public get _delete(): SubscribeOperationReq | undefined {
        return this['delete'];
    }
}