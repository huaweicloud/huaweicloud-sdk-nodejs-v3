import { CreateDashBoardReqBody } from './CreateDashBoardReqBody';


export class CreateDashBoardRequest {
    private 'Content-Type'?: string;
    public body?: CreateDashBoardReqBody;
    public constructor(contentType?: string) { 
        this['Content-Type'] = contentType;
    }
    public withContentType(contentType: string): CreateDashBoardRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withBody(body: CreateDashBoardReqBody): CreateDashBoardRequest {
        this['body'] = body;
        return this;
    }
}