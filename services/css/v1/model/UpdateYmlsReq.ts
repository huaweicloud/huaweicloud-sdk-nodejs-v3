import { UpdateYmlsReqEdit } from './UpdateYmlsReqEdit';


export class UpdateYmlsReq {
    public edit?: UpdateYmlsReqEdit;
    private 'inst_type'?: UpdateYmlsReqInstTypeEnum | string;
    public constructor(edit?: UpdateYmlsReqEdit) { 
        this['edit'] = edit;
    }
    public withEdit(edit: UpdateYmlsReqEdit): UpdateYmlsReq {
        this['edit'] = edit;
        return this;
    }
    public withInstType(instType: UpdateYmlsReqInstTypeEnum | string): UpdateYmlsReq {
        this['inst_type'] = instType;
        return this;
    }
    public set instType(instType: UpdateYmlsReqInstTypeEnum | string  | undefined) {
        this['inst_type'] = instType;
    }
    public get instType(): UpdateYmlsReqInstTypeEnum | string | undefined {
        return this['inst_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateYmlsReqInstTypeEnum {
    KOS = 'kos',
    KOS_DOC = 'kos-doc'
}
