import { UpdateYmlsReqEditModify } from './UpdateYmlsReqEditModify';


export class UpdateYmlsReqEdit {
    public modify?: UpdateYmlsReqEditModify;
    private 'delete'?: UpdateYmlsReqEditModify;
    public reset?: UpdateYmlsReqEditModify;
    public constructor() { 
    }
    public withModify(modify: UpdateYmlsReqEditModify): UpdateYmlsReqEdit {
        this['modify'] = modify;
        return this;
    }
    public withDelete(_delete: UpdateYmlsReqEditModify): UpdateYmlsReqEdit {
        this['delete'] = _delete;
        return this;
    }
    public set _delete(_delete: UpdateYmlsReqEditModify  | undefined) {
        this['delete'] = _delete;
    }
    public get _delete(): UpdateYmlsReqEditModify | undefined {
        return this['delete'];
    }
    public withReset(reset: UpdateYmlsReqEditModify): UpdateYmlsReqEdit {
        this['reset'] = reset;
        return this;
    }
}