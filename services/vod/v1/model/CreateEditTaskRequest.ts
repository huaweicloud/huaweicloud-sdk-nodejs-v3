import { CreateEditTaskRequestBody } from './CreateEditTaskRequestBody';


export class CreateEditTaskRequest {
    private 'X-Sdk-Date'?: string;
    public body?: CreateEditTaskRequestBody;
    public constructor() { 
    }
    public withXSdkDate(xSdkDate: string): CreateEditTaskRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withBody(body: CreateEditTaskRequestBody): CreateEditTaskRequest {
        this['body'] = body;
        return this;
    }
}