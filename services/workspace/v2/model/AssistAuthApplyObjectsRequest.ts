import { ApplyObjects } from './ApplyObjects';


export class AssistAuthApplyObjectsRequest {
    public add?: Array<ApplyObjects>;
    private 'delete'?: Array<ApplyObjects>;
    public constructor() { 
    }
    public withAdd(add: Array<ApplyObjects>): AssistAuthApplyObjectsRequest {
        this['add'] = add;
        return this;
    }
    public withDelete(_delete: Array<ApplyObjects>): AssistAuthApplyObjectsRequest {
        this['delete'] = _delete;
        return this;
    }
    public set _delete(_delete: Array<ApplyObjects>  | undefined) {
        this['delete'] = _delete;
    }
    public get _delete(): Array<ApplyObjects> | undefined {
        return this['delete'];
    }
}