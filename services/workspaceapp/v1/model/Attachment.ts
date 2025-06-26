import { AttachType } from './AttachType';


export class Attachment {
    public attach?: string;
    private 'attach_type'?: AttachType;
    public constructor(attach?: string, attachType?: AttachType) { 
        this['attach'] = attach;
        this['attach_type'] = attachType;
    }
    public withAttach(attach: string): Attachment {
        this['attach'] = attach;
        return this;
    }
    public withAttachType(attachType: AttachType): Attachment {
        this['attach_type'] = attachType;
        return this;
    }
    public set attachType(attachType: AttachType  | undefined) {
        this['attach_type'] = attachType;
    }
    public get attachType(): AttachType | undefined {
        return this['attach_type'];
    }
}