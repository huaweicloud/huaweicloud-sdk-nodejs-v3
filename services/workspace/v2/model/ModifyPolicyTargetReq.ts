import { Target } from './Target';


export class ModifyPolicyTargetReq {
    public add?: Array<Target>;
    private 'delete'?: Array<Target>;
    public constructor() { 
    }
    public withAdd(add: Array<Target>): ModifyPolicyTargetReq {
        this['add'] = add;
        return this;
    }
    public withDelete(_delete: Array<Target>): ModifyPolicyTargetReq {
        this['delete'] = _delete;
        return this;
    }
    public set _delete(_delete: Array<Target>  | undefined) {
        this['delete'] = _delete;
    }
    public get _delete(): Array<Target> | undefined {
        return this['delete'];
    }
}