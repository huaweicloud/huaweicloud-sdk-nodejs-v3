import { UpdateYmlsReqEdit } from './UpdateYmlsReqEdit';


export class UpdateYmlsReq {
    public edit?: UpdateYmlsReqEdit;
    public constructor(edit?: UpdateYmlsReqEdit) { 
        this['edit'] = edit;
    }
    public withEdit(edit: UpdateYmlsReqEdit): UpdateYmlsReq {
        this['edit'] = edit;
        return this;
    }
}