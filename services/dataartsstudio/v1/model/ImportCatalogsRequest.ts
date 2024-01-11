import { ImportCatalogsRequestBody } from './ImportCatalogsRequestBody';


export class ImportCatalogsRequest {
    public workspace?: string;
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