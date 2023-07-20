
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExecuteSqlResponse extends SdkResponse {
    public id?: string;
    public message?: string;
    public statement?: string;
    public status?: string;
    private 'result_location'?: string;
    public content?: Array<Array<string>>;
    public constructor() { 
        super();
    }
    public withId(id: string): ExecuteSqlResponse {
        this['id'] = id;
        return this;
    }
    public withMessage(message: string): ExecuteSqlResponse {
        this['message'] = message;
        return this;
    }
    public withStatement(statement: string): ExecuteSqlResponse {
        this['statement'] = statement;
        return this;
    }
    public withStatus(status: string): ExecuteSqlResponse {
        this['status'] = status;
        return this;
    }
    public withResultLocation(resultLocation: string): ExecuteSqlResponse {
        this['result_location'] = resultLocation;
        return this;
    }
    public set resultLocation(resultLocation: string  | undefined) {
        this['result_location'] = resultLocation;
    }
    public get resultLocation(): string | undefined {
        return this['result_location'];
    }
    public withContent(content: Array<Array<string>>): ExecuteSqlResponse {
        this['content'] = content;
        return this;
    }
}