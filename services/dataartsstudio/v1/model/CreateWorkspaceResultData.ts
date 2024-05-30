import { WorkspaceVO } from './WorkspaceVO';


export class CreateWorkspaceResultData {
    public value?: WorkspaceVO;
    public constructor() { 
    }
    public withValue(value: WorkspaceVO): CreateWorkspaceResultData {
        this['value'] = value;
        return this;
    }
}