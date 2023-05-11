import { SmsAppUpdateReq } from './SmsAppUpdateReq';


export class UpdateAppRequest {
    private 'Content-Type': string | undefined;
    public id: string;
    public body?: SmsAppUpdateReq;
    public constructor(contentType?: any, id?: any) { 
        this['Content-Type'] = contentType;
        this['id'] = id;
    }
    public withContentType(contentType: string): UpdateAppRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withId(id: string): UpdateAppRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: SmsAppUpdateReq): UpdateAppRequest {
        this['body'] = body;
        return this;
    }
}