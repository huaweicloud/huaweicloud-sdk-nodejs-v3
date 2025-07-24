import { AttachmentVo } from './AttachmentVo';


export class ResultValueListAttachmentVo {
    public value?: Array<AttachmentVo>;
    public constructor() { 
    }
    public withValue(value: Array<AttachmentVo>): ResultValueListAttachmentVo {
        this['value'] = value;
        return this;
    }
}