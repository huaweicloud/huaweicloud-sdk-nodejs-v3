
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSqlResultResponse extends SdkResponse {
    public id?: string;
    public message?: string;
    public statement?: string;
    public status?: string;
    private 'result_location'?: string | undefined;
    public content?: Array<Array<string>>;
    public constructor() { 
        super();
    }
    public withId(id: string): ShowSqlResultResponse {
        this['id'] = id;
        return this;
    }
    public withMessage(message: string): ShowSqlResultResponse {
        this['message'] = message;
        return this;
    }
    public withStatement(statement: string): ShowSqlResultResponse {
        this['statement'] = statement;
        return this;
    }
    public withStatus(status: string): ShowSqlResultResponse {
        this['status'] = status;
        return this;
    }
    public withResultLocation(resultLocation: string): ShowSqlResultResponse {
        this['result_location'] = resultLocation;
        return this;
    }
    public set resultLocation(resultLocation: string | undefined) {
        this['result_location'] = resultLocation;
    }
    public get resultLocation() {
        return this['result_location'];
    }
    public withContent(content: Array<Array<string>>): ShowSqlResultResponse {
        this['content'] = content;
        return this;
    }
}