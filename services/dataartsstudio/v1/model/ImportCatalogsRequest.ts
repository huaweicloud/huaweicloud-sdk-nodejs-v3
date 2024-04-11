import { ImportCatalogsRequestBody } from './ImportCatalogsRequestBody';


export class ImportCatalogsRequest {
    public workspace?: string;
    private 'X-Project-Id'?: string;
    private 'Content-Type'?: string;
    private 'action-id'?: string;
    private 'skip-exist'?: boolean;
    public body?: ImportCatalogsRequestBody;
    public constructor(workspace?: string, actionId?: string) { 
        this['workspace'] = workspace;
        this['action-id'] = actionId;
    }
    public withWorkspace(workspace: string): ImportCatalogsRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withXProjectId(xProjectId: string): ImportCatalogsRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withContentType(contentType: string): ImportCatalogsRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
    public withActionId(actionId: string): ImportCatalogsRequest {
        this['action-id'] = actionId;
        return this;
    }
    public set actionId(actionId: string  | undefined) {
        this['action-id'] = actionId;
    }
    public get actionId(): string | undefined {
        return this['action-id'];
    }
    public withSkipExist(skipExist: boolean): ImportCatalogsRequest {
        this['skip-exist'] = skipExist;
        return this;
    }
    public set skipExist(skipExist: boolean  | undefined) {
        this['skip-exist'] = skipExist;
    }
    public get skipExist(): boolean | undefined {
        return this['skip-exist'];
    }
    public withBody(body: ImportCatalogsRequestBody): ImportCatalogsRequest {
        this['body'] = body;
        return this;
    }
}