import { SubAppUpdateParam } from './SubAppUpdateParam';


export class UpdateSubAppRequest {
    private 'sub_app_id'?: string;
    public body?: SubAppUpdateParam;
    public constructor(subAppId?: string) { 
        this['sub_app_id'] = subAppId;
    }
    public withSubAppId(subAppId: string): UpdateSubAppRequest {
        this['sub_app_id'] = subAppId;
        return this;
    }
    public set subAppId(subAppId: string  | undefined) {
        this['sub_app_id'] = subAppId;
    }
    public get subAppId(): string | undefined {
        return this['sub_app_id'];
    }
    public withBody(body: SubAppUpdateParam): UpdateSubAppRequest {
        this['body'] = body;
        return this;
    }
}