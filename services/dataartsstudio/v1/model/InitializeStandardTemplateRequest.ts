import { StandElementFieldVOList } from './StandElementFieldVOList';


export class InitializeStandardTemplateRequest {
    public workspace?: string;
    private 'action-id'?: string;
    public body?: StandElementFieldVOList;
    public constructor(workspace?: string, actionId?: string) { 
        this['workspace'] = workspace;
        this['action-id'] = actionId;
    }
    public withWorkspace(workspace: string): InitializeStandardTemplateRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withActionId(actionId: string): InitializeStandardTemplateRequest {
        this['action-id'] = actionId;
        return this;
    }
    public set actionId(actionId: string  | undefined) {
        this['action-id'] = actionId;
    }
    public get actionId(): string | undefined {
        return this['action-id'];
    }
    public withBody(body: StandElementFieldVOList): InitializeStandardTemplateRequest {
        this['body'] = body;
        return this;
    }
}