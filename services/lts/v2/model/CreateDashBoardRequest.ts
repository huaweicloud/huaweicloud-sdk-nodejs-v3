import { CreateDashBoardReqBody } from './CreateDashBoardReqBody';


export class CreateDashBoardRequest {
    private 'Content-Type': string | undefined;
    public body?: CreateDashBoardReqBody;
    public constructor(contentType?: any) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateDashBoardRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
    public withBody(body: CreateDashBoardReqBody): CreateDashBoardRequest {
        this['body'] = body;
        return this;
    }
}