import { UpdateYmlsReqEditModify } from './UpdateYmlsReqEditModify';


export class UpdateYmlsReqEdit {
    public modify?: UpdateYmlsReqEditModify;
    public constructor(modify?: UpdateYmlsReqEditModify) { 
        this['modify'] = modify;
    }
    public withModify(modify: UpdateYmlsReqEditModify): UpdateYmlsReqEdit {
        this['modify'] = modify;
        return this;
    }
}