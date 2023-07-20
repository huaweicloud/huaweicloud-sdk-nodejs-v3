import { AttachSharebwDict } from './AttachSharebwDict';


export class AttachSharebwReq {
    public publicip?: AttachSharebwDict;
    public constructor() { 
    }
    public withPublicip(publicip: AttachSharebwDict): AttachSharebwReq {
        this['publicip'] = publicip;
        return this;
    }
}