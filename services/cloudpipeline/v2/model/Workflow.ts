import { PipelineParam } from './PipelineParam';
import { Source } from './Source';


export class Workflow {
    public parameter?: Array<PipelineParam>;
    public source?: Array<Source>;
    public name?: string;
    private 'project_id'?: string;
    private 'project_name'?: string;
    public constructor(parameter?: Array<PipelineParam>, source?: Array<Source>, name?: string, projectId?: string, projectName?: string) { 
        this['parameter'] = parameter;
        this['source'] = source;
        this['name'] = name;
        this['project_id'] = projectId;
        this['project_name'] = projectName;
    }
    public withParameter(parameter: Array<PipelineParam>): Workflow {
        this['parameter'] = parameter;
        return this;
    }
    public withSource(source: Array<Source>): Workflow {
        this['source'] = source;
        return this;
    }
    public withName(name: string): Workflow {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): Workflow {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): Workflow {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
}